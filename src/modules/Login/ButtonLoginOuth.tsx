import Button from '~/components/Button'

interface IButtonLoginOuth {
  title: string
  iconSrc: string
}

const ButtonLoginOuth = ({ title, iconSrc }: IButtonLoginOuth) => {
  const handleLoginGoogle = () => {}

  return (
    <Button onClick={handleLoginGoogle} className='bg-white text-slate-800 w-full font-medium'>
      <div className='flex items-center gap-2 justify-center w-full'>
        <div className='w-5 h-5'>
          <img src={iconSrc} className='w-full h-full object-cover block' alt='' />
        </div>

        {title}
      </div>
    </Button>
  )
}

export default ButtonLoginOuth
