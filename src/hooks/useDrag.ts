import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Active,
  CollisionDetection,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  Over,
  UniqueIdentifier,
  pointerWithin,
  closestCorners,
  getFirstCollision,
  DroppableContainer,
  Collision
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import IColumnModel from '~/models/column'
import ICardModel from '~/models/card'
import { ACTIVE_DRAG_ITEM } from '~/enums/board'
import { cloneDeep } from 'lodash'
import generatePlaceholderCard from '~/utils/generateCard'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { updateCardOrderDiffColumn, updateColumn } from '~/services/columns'
import {
  RequestUpdateBoardOrderedColumn,
  ResquestUpdateCardOrderDiffColumn,
  ResquestUpdateColumnOrderedCards
} from '~/types/projects'
import { CARD_CONSTANTS } from '~/constants/cards'
import { updateOrderdColumn } from '~/services/projects'
import useWorkSpace from '~/store/workSpace'

const useDrag = (items: IColumnModel[] | undefined) => {
  const boardDetail = useWorkSpace((state) => state.projectDetail)

  const [ordreredColumns, setOrdreredColumns] = useState<IColumnModel[]>([])
  const [ordreredItemIds, setOrdreredItemIds] = useState<string[]>([])
  const [typeActiveDrag, setTypeActiveDrag] = useState<string | undefined>()
  const [activeColumn, setActiveColumn] = useState<IColumnModel | undefined>()
  const [activeCard, setActiveCard] = useState<ICardModel | undefined>()
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState<
    IColumnModel | undefined
  >()

  const updateBoardOrderedColumn = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_ORDER_COLUMN],
    mutationFn: (payload: RequestUpdateBoardOrderedColumn) => updateOrderdColumn(payload)
  })

  const updateColumnOrderedCard = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_ORDER_CARD],
    mutationFn: (payload: ResquestUpdateColumnOrderedCards) => updateColumn(payload)
  })

  const updateCardDiffcolumn = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_ORDER_CARD_BETWEEN_DIFF_COLUMN],
    mutationFn: (payload: ResquestUpdateCardOrderDiffColumn) => updateCardOrderDiffColumn(payload)
  })

  // Final collision point when processing the collision detection algorithm
  const lastOverId = useRef<UniqueIdentifier | null>(null)

  const findColumnByCardId = (cardId: string) => {
    /**
     * Find column by cardId
     * Iterate through each column and map all cards in that column to the form of cardId array => check if the array contains the cardId passed in ?
     *
     * if any ? return column : undefined
     */
    return ordreredColumns?.find(
      (column) => column?.cards?.map((card) => card._id)?.includes(cardId)
    )
  }

  const collisonDetectionsStrategy: CollisionDetection = useCallback(
    (args): Collision[] => {
      /**
       * Custom collision detection strategy optimized for multiple containers
       *
       * - First, find any droppable containers intersecting with the pointer.
       * - If there are none, find intersecting containers with the active draggable.
       * - If there are no intersecting containers, return the last matched intersection
       *
       */
      if (typeActiveDrag === ACTIVE_DRAG_ITEM.COLUMN) {
        return closestCorners({ ...args })
      }

      // Find the intersection
      const pointerIntersections = pointerWithin(args)

      if (!pointerIntersections?.length) return []

      // Find and retrieve overId during intersection
      // The default overId will be cardId, but when dragged to the column touch point, over will be columnId
      let overId = getFirstCollision(pointerIntersections, 'id')

      if (overId) {
        // Check if the shift point touches when overId === columnId
        const checkColumn = ordreredColumns.find((column) => column._id === overId)

        if (checkColumn) {
          // Reassign overId = back to the original cardId
          overId = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (conteiner: DroppableContainer) =>
                conteiner.id !== overId &&
                checkColumn?.cards.some((card) => card._id === conteiner.id)
            )
          })[0]?.id
        }

        lastOverId.current = overId
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    [typeActiveDrag, ordreredColumns]
  )

  const moveCardBetweenColumn = ({
    overColumn,
    active,
    overCardId,
    over,
    activeColumn,
    activeCardId,
    activeCardData
  }: {
    overColumn: IColumnModel
    active: Active
    over: Over
    overCardId: UniqueIdentifier
    activeColumn: IColumnModel
    activeCardId: UniqueIdentifier
    activeCardData: ICardModel
  }) => {
    setOrdreredColumns((prev) => {
      const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId)

      let newCardIndex: number

      const isBelowOverItem =
        active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height

      const modifier = isBelowOverItem ? 1 : 0

      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      const cloneColumns = cloneDeep(prev) // clone  previouscolumns
      const nextActiveColumn = cloneColumns.find((column) => column._id === activeColumn._id)
      const nextOverColumn = cloneColumns.find((column) => column._id === overColumn._id)

      // old column
      if (nextActiveColumn) {
        const cards = nextActiveColumn.cards
        nextActiveColumn.cards = cards.filter((card) => card._id !== activeCardId) // Delete card in old column

        if (!nextActiveColumn.cards?.length) {
          nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)]
        }

        const dndOrderedCardIds = cards.map((card) => card._id)
        setOrdreredItemIds(dndOrderedCardIds) // ordered item_ids
      }

      // new column
      if (nextOverColumn) {
        const cards = nextOverColumn.cards

        cards.splice(newCardIndex, 0, activeCardData)

        nextOverColumn.cards = cards.filter((card) => card._id !== activeCardId)

        // Remove card placeho
        nextOverColumn.cards = cards.filter((card) => !card.FE_PlaceholderCard)

        nextOverColumn.cards = nextOverColumn.cards
      }

      return cloneColumns
    })
  }

  const handleDragStart = (event: DragStartEvent) => {
    const currentData = event.active?.data?.current

    if (currentData?.type === ACTIVE_DRAG_ITEM.COLUMN) {
      setTypeActiveDrag(ACTIVE_DRAG_ITEM.COLUMN)
      setActiveColumn(currentData.column)
      return
    }

    if (currentData?.type === ACTIVE_DRAG_ITEM.CARD) {
      setTypeActiveDrag(ACTIVE_DRAG_ITEM.CARD)
      setActiveCard(currentData.card)
      setOldColumnWhenDraggingCard(findColumnByCardId(currentData.card._id))
      return
    }
  }

  const handleDragOver = (event: DragOverEvent) => {
    if (typeActiveDrag === ACTIVE_DRAG_ITEM.COLUMN) return

    // Handling while moving cards between columns
    const { active, over } = event

    if (!active || !over) return

    const { id: activeCardId, data } = active // activeCardId is the card id being dragged
    const { id: overCardId } = over // overCard is the card that is interacting above or below activeCard

    const activeCardData: ICardModel = data?.current?.card // activeCardData is the card being dragged

    const activeColumn = findColumnByCardId(`${activeCardId}`) // Column which card is active
    const overColumn = findColumnByCardId(`${overCardId}`) // Column which the card just flew over

    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      //  The position of the overCard in the active column (where the activeCard is about to be dropped)
      moveCardBetweenColumn({
        active,
        activeCardData,
        activeCardId,
        activeColumn,
        over,
        overCardId,
        overColumn
      })
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    // Handle when moved card
    if (typeActiveDrag === ACTIVE_DRAG_ITEM.CARD) {
      const { id: activeCardId, data } = active // activeCardId is the card id being dragged
      const { id: overCardId } = over // overCard is the card that is interacting above or below activeCard

      const activeCardData = data?.current?.card as ICardModel // activeCardData is the card being dragged

      const activeColumn = findColumnByCardId(`${activeCardId}`) // Column which card is active
      const overColumn = findColumnByCardId(`${overCardId}`) as IColumnModel // Column which the card just flew over

      if (!activeColumn || !oldColumnWhenDraggingCard) return

      if (activeColumn._id !== oldColumnWhenDraggingCard._id) {
        // Drag and drop between 2 different columns
        moveCardBetweenColumn({
          active,
          activeCardData,
          activeCardId,
          activeColumn,
          over,
          overCardId,
          overColumn
        })
        const newCardOrderd = activeColumn.cards.map((card) => card._id)

        // call update columns orders with different cards
        updateCardDiffcolumn.mutate({
          cardActiveId: activeCardData._id,
          cards: newCardOrderd,
          newColumnId: activeColumn._id,
          oldColumnId: oldColumnWhenDraggingCard._id
        })

        // console.log({ ordreredColumns, newCardOrderd, oldColumnWhenDraggingCard, activeCardData })
      } else {
        // Drag and drop in the same column
        const oldCards = oldColumnWhenDraggingCard?.cards

        const oldCardIndex = oldCards?.findIndex((item) => item._id === activeCardId)
        const newCardIndex = activeColumn?.cards?.findIndex((item) => item._id === overCardId)

        if (newCardIndex < 0 || oldCardIndex < 0) return

        if (oldCardIndex !== newCardIndex) {
          const dndOrderedCardItems = arrayMove<ICardModel>(oldCards, oldCardIndex, newCardIndex)
          const dndOrderedCardItemIds = dndOrderedCardItems.map((item) => item._id)

          setOrdreredColumns((prev) => {
            const cloneColumns = cloneDeep(prev) // clone  previouscolumns

            const targetColumn = cloneColumns.find((column) => column._id === activeColumn._id)

            if (!targetColumn) return cloneColumns

            targetColumn.cards = dndOrderedCardItems

            return cloneColumns
          })

          const newCardOrders = dndOrderedCardItemIds.filter(
            (cardId) => !cardId.includes(CARD_CONSTANTS.PLACEHOLDER)
          )

          // call api update column has been sort ordered cards
          updateColumnOrderedCard.mutate({
            columnId: overColumn._id,
            cards: newCardOrders
          })

          // console.log('column: ', overColumn)
          // console.log('order of cards in 1 column ------', dndOrderedCardItemIds)
        }
      }
    }

    // Handle when moved column
    if (typeActiveDrag === ACTIVE_DRAG_ITEM.COLUMN) {
      const oldColumnIndex = ordreredColumns.findIndex((item) => item._id === active.id)
      const newColumnIndex = ordreredColumns.findIndex((item) => item._id === over.id)

      if (newColumnIndex < 0 || oldColumnIndex < 0) return

      if (oldColumnIndex !== newColumnIndex) {
        const dndOrderedColumnItems = arrayMove<IColumnModel>(
          ordreredColumns,
          oldColumnIndex,
          newColumnIndex
        )

        const dndOrderedColumnItemIds = dndOrderedColumnItems.map((item) => item._id)

        setOrdreredColumns(dndOrderedColumnItems) // ordered items
        setOrdreredItemIds(dndOrderedColumnItemIds) // ordered item_ids

        // call api update orderd of columns
        updateBoardOrderedColumn.mutate({
          boardId: `${boardDetail?._id}`,
          columns: dndOrderedColumnItemIds
        })

        // console.log('order of column', dndOrderedColumnItemIds)
      }
    }

    setTypeActiveDrag(undefined)
    setActiveCard(undefined)
    setActiveColumn(undefined)
    setOldColumnWhenDraggingCard(undefined)
  }

  useEffect(() => {
    if (!items) return

    setOrdreredColumns(items)
  }, [items])

  return {
    ordreredColumns,
    ordreredItemIds,
    typeActiveDrag,
    activeColumn,
    activeCard,
    handleDragEnd,
    handleDragStart,
    handleDragOver,
    collisonDetectionsStrategy
  }
}

export default useDrag
