import { ChangeEvent, memo } from 'react'
import { TagIcon } from '~/components/Icons'
import useModal from '~/store/modal'

const SetTitle = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setCardEdit = useModal((state) => state.setCardEdit)

  const handleSetCardTitle = (e: ChangeEvent<HTMLInputElement>) => {
    if (!cardEdit) return

    setCardEdit({
      ...cardEdit,
      title: e.target.value
    })
  }

  return (
    <div className='edit-card-operation'>
      <div className='edit-card-lable'>
        <TagIcon />
        <span>Lable</span>
      </div>

      <input
        className='py-2 px-3 outline-none border focus:border-primary rounded-lg w-full max-w-[230px]'
        type='text'
        value={cardEdit?.title}
        onChange={(e) => handleSetCardTitle(e)}
      />
    </div>
  )
}

export default memo(SetTitle)
