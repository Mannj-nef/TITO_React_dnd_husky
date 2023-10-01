import { memo, useEffect } from 'react'
import Oauth from '../Oauth'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { Input } from '~/components/Inputs'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'
import ROUTER from '~/configs/router'
import useUser from '~/store/user'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

interface ISignIn {
  handleShowLogin: (isToLogin: boolean) => void
}

interface IFormInputs {
  email: string
}

const schema: yup.ObjectSchema<IFormInputs> = yup.object({
  email: yup.string().email().required()
})

type FormData = yup.InferType<typeof schema>

const SignIn = ({ handleShowLogin }: ISignIn) => {
  const { handleSubmit, control, setValue, setFocus } = useForm<IFormInputs>()

  const email = useUser((state) => state.email)
  const setEmail = useUser((state) => state.setEmail)

  const onSubmit: SubmitHandler<FormData> = ({ email }: FormData) => {
    if (email.length <= 0) return

    setEmail(email)
    handleShowLogin(true)
  }

  useEffect(() => {
    setValue('email', email)
    setFocus('email')
  }, [email])

  return (
    <div className='max-w-[300px] mx-auto'>
      <h2 className='mb-12 text-center'>Sign in</h2>
      <Oauth />

      <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
        <Input name='email' control={control} placeholder='Enter email address' />

        <div className='flex flex-col gap-6 mt-6'>
          <Button buttonType='submit' className='bg-text1 text-white font-bold w-full p-1'>
            Next
          </Button>
          <Button className='bg-white font-bold'>Forgot password?</Button>
        </div>
      </form>

      <p className='mt-10'>
        Don't have an account?{' '}
        <Link to={ROUTER.LOGIN.SIGN_UP} className='text-primary cursor-pointer'>
          Sign up
        </Link>
      </p>
    </div>
  )
}

export default withErrorBoundary(memo(SignIn), {
  FallbackComponent: ErrorComponent
})
