import ICardModel from '~/models/card'
import { handleColorLable } from '~/utils/handleColor'

interface ICardConterd {
  card: ICardModel
}

const CardContent = ({ card }: ICardConterd) => {
  const classColor = handleColorLable(card.type || 'primary')

  return (
    <>
      {card.imgUrl && (
        <div className='relative h-[100px]'>
          <div className='absolute top-1 left-0 w-full  h-full overflow-hidden rounded-t-lg'>
            <img src={card.imgUrl} className='w-full h-full block object-cover' alt='' />
          </div>
        </div>
      )}

      {card.description && (
        <div className={`p-3 rounded-lg ${classColor} h-[60px]`}>
          <p className='text-line-2  text-sm  text-inherit'>{card.description}</p>
        </div>
      )}
    </>
  )
}

export default CardContent
