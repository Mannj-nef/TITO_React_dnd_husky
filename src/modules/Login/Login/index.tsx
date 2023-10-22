import { memo, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from '~/components/Inputs'
import Button from '~/components/Button'
import { ArrowLongLeftIcon } from '~/components/Icons'
import * as yup from 'yup'
import WrappIconPassword from '~/components/WrappIconPassword'
import { Link, useNavigate } from 'react-router-dom'
import ROUTER from '~/configs/router'
import { useMutation } from '@tanstack/react-query'
import { RequestLogin } from '~/types/users'
import { login } from '~/services/users'
import QUERY_KEY from '~/configs/reactQuery'
import useUser from '~/store/user'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import useToggle from '~/hooks/useToggle'

interface ILogin {
  handleShowLogin: (isToLogin: boolean) => void
}

interface IFormInputs {
  email: string
  password: string
}

const schema: yup.ObjectSchema<IFormInputs> = yup.object({
  email: yup.string().required(),
  password: yup.string().required()
})

type FormData = yup.InferType<typeof schema>

const Login = ({ handleShowLogin }: ILogin) => {
  const email = useUser((state) => state.email)

  const navigate = useNavigate()

  const { show: showPassword, handleShow: setShowPassword } = useToggle()

  const { handleSubmit, control, setValue, setFocus, watch, reset } = useForm<IFormInputs>()
  const passwordWatch = watch('password')

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.LOGIN],
    mutationFn: (user: RequestLogin) => login(user)
  })

  useEffect(() => {
    setFocus('password')
  }, [])

  useEffect(() => {
    setValue('email', email)
  }, [email])

  const onLogin: SubmitHandler<FormData> = ({ email, password }: FormData) => {
    mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate(ROUTER.HOME.path)
          reset()
        }
      }
    )
  }

  return (
    <div className='p-10 flex flex-col h-full'>
      <h2>Enter your password</h2>

      <form onSubmit={handleSubmit(onLogin)} className='flex flex-col flex-1' autoComplete='off'>
        <div className='flex flex-col gap-4 mt-10'>
          <Input name='email' control={control} placeholder={email} disabled />
          <Input name='password' control={control} type={showPassword ? 'text' : 'password'} placeholder='Password'>
            <WrappIconPassword showPassword={showPassword} setShowPassword={setShowPassword} />
          </Input>
          <p className='text-primary cursor-pointer'>Forgot password?</p>
          <p
            onClick={() => handleShowLogin(false)}
            className='flex items-center rounded-full p-1 text-sm hover:bg-slate-300 transition-opacity cursor-pointer w-fit'
          >
            <ArrowLongLeftIcon />
          </p>
        </div>

        <Button
          disabled={!passwordWatch}
          buttonType='submit'
          className='bg-text1 text-white font-bold w-full p-1 mt-auto text-center'
        >
          {isLoading ? <span className='circle-loading !left-0 !translate-x-0'></span> : 'Log in'}
        </Button>
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

export default withErrorBoundary(memo(Login), { FallbackComponent: ErrorComponent })
