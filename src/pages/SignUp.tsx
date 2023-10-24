import { useState } from 'react'
import { useForm } from 'react-hook-form'
import WrappIconPassword from '~/components/WrappIconPassword'
import { yupResolver } from '@hookform/resolvers/yup'
import { Input } from '~/components/Inputs'
import WrappLogin from '~/components/WrappLogin'
import Button from '~/components/Button'
import * as yup from 'yup'
import YUP_SCHEMA from '~/constants/validates/yupSchema'
import DatePicker from 'react-datepicker'
import { useMutation } from '@tanstack/react-query'
import { register } from '~/services/users'
import { RequestRegister } from '~/types/users'
import { useNavigate } from 'react-router-dom'
import ROUTER from '~/configs/router'
import { toast } from 'react-toastify'
import QUERY_KEY from '~/configs/reactQuery'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'

interface IFormInputs {
  email: string
  password: string
  confirmPassword: string
}

const schema: yup.ObjectSchema<IFormInputs> = yup
  .object({
    email: YUP_SCHEMA.EMAIL,
    password: YUP_SCHEMA.PASSWORD,
    confirmPassword: YUP_SCHEMA.PASSWORDCONFIRMATION
  })
  .required()

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [birthDay, setBirthDay] = useState(new Date())
  const navigate = useNavigate()

  const { handleSubmit, control, formState, watch, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })
  const { errors } = formState

  const email = watch('email')
  const password = watch('password')
  const confirmPassword = watch('confirmPassword')

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.SIGN_UP],
    mutationFn: (user: RequestRegister) => register(user)
  })

  const handleSignUp = async (values: IFormInputs) => {
    mutate(
      { ...values, date: birthDay },
      {
        onSuccess: () => {
          reset()
          navigate(ROUTER.HOME.path)
        },
        onError: (error: any) => {
          toast.error(error.response.data.email.msg)
        }
      }
    )
  }

  return (
    <WrappLogin>
      <div className='px-10 py-6 flex flex-col h-full'>
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit(handleSignUp)} autoComplete='off'>
          <div className='flex flex-col gap-6'>
            <Input
              control={control}
              error={errors.email?.message}
              name='email'
              placeholder='Emter your email address'
            ></Input>
            <Input
              control={control}
              type={showPassword ? 'text' : 'password'}
              name='password'
              error={errors.password?.message}
              placeholder='Enter your password'
            >
              <WrappIconPassword showPassword={showPassword} setShowPassword={setShowPassword} />
            </Input>

            <Input
              control={control}
              name='confirmPassword'
              type='password'
              error={errors.confirmPassword?.message}
              placeholder='Confirm password'
            ></Input>
          </div>

          <div className='mt-8'>
            <h4 className='font-bold'>Date of birth</h4>
            <p className='text-sm'>
              This will not be shown publicly. Confirm your own age, even if this account is for a
              business, a pet, or something else.
            </p>
            <div className='my-5'>
              <DatePicker
                selected={birthDay}
                onChange={(date: Date) => setBirthDay(date)}
                dateFormat='dd/MM/yyy'
              />
            </div>
          </div>

          <Button
            disabled={!email || !password || !confirmPassword}
            buttonType='submit'
            className='bg-text1 text-white font-bold w-full p-1 mt-auto'
          >
            {isLoading ? (
              <span className='circle-loading !left-0 !translate-x-0'></span>
            ) : (
              'Sign up'
            )}
          </Button>
        </form>
      </div>
    </WrappLogin>
  )
}

export default withErrorBoundary(SignUp, {
  FallbackComponent: ErrorComponent
})
