import { MouseEvent, memo } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { TagIcon } from '~/components/Icons'
import { typeCard } from '~/enums/card'
import { CARD_TYPES } from '~/mocks/workSpace'
import useModal from '~/store/modal'
import { handleColorLable } from '~/utils/handleColor'

const SetType = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const isShowTypeCardEdit = useModal((state) => state.isShowTypeCardEdit)
  const setShowTypeCardEdit = useModal((state) => state.setShowTypeCardEdit)

  const setCardEdit = useModal((state) => state.setCardEdit)

  const handleSetCardType = (e: MouseEvent<HTMLDivElement>, type: typeCard) => {
    if (!cardEdit) return

    e.stopPropagation()

    setCardEdit({
      ...cardEdit,
      type
    })

    setShowTypeCardEdit()
  }

  return (
    <div className='edit-card-operation'>
      <div className='edit-card-lable'>
        <TagIcon />
        <span>Type</span>
      </div>

      <div className='relative w-full max-w-[230px]'>
        <div>
          <p
            className={`${handleColorLable(`${cardEdit?.type}`)} py-2 px-3 rounded-lg cursor-pointer`}
            onClick={() => setShowTypeCardEdit()}
          >
            {cardEdit?.type}
          </p>
        </div>
        {isShowTypeCardEdit && (
          <div
            className='absolute bg-white w-full mt-2 flex flex-col gap-1 p-2 shadow-boxSecondary rounded-lg'
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
            }}
          >
            {CARD_TYPES.map((type) => (
              <div
                key={type}
                onClick={(e) => handleSetCardType(e, type)}
                className={`py-1 px-3 rounded-lg cursor-pointer ${handleColorLable(type)}`}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default withErrorBoundary(memo(SetType), {
  FallbackComponent: ErrorComponent
})
