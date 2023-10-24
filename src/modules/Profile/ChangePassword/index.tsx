import { memo, useEffect } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import Button from '~/components/Button'
import ErrorComponent from '~/components/Error'
import { Input } from '~/components/Inputs'
import Portal from '~/components/Portal'
import YUP_SCHEMA from '~/constants/validates/yupSchema'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import useUser from '~/store/user'
import WrappIconPassword from '~/components/WrappIconPassword'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { RequestLogin } from '~/types/users'
import { login } from '~/services/users'
import useToggle from '~/hooks/useToggle'

interface IFormInputs {
  emailChangePassword: string
  passwordChange: string
}

const schema: yup.ObjectSchema<IFormInputs> = yup
  .object({
    emailChangePassword: YUP_SCHEMA.EMAIL,
    passwordChange: YUP_SCHEMA.PASSWORD
  })
  .required()

const ChangePassword = () => {
  const user = useUser((state) => state.user)
  const setPassword = useUser((state) => state.setPassword)

  const { show: isHiddenChangePassword, handleShow: setIsHiddenChangePassword } = useToggle()
  const { show: isShowPassword, handleShow: setIsShowPassword } = useToggle()

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.LOGIN],
    mutationFn: (user: RequestLogin) => login(user)
  })

  const { control, setValue, handleSubmit, formState, setFocus } = useForm({
    resolver: yupResolver(schema)
  })

  const { errors } = formState

  const handleLogin = (value: IFormInputs) => {
    mutate(
      { email: value.emailChangePassword, password: value.passwordChange },
      {
        onSuccess: () => {
          setIsShowPassword(false)
          setPassword(value.passwordChange)
        }
      }
    )
  }

  useEffect(() => {
    if (!user) return
    setValue('emailChangePassword', user.email)
    setFocus('emailChangePassword')
  }, [user])

  return (
    <>
      <Button className='text-white !rounded-lg' type='primary' onClick={() => setIsHiddenChangePassword(true)}>
        Change password
      </Button>

      {isHiddenChangePassword && (
        <Portal>
          <div className='fixed top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center'>
            <div
              className='absolute w-full h-full bg-black bg-opacity-50 cursor-pointer -z-10'
              onClick={() => setIsHiddenChangePassword(false)}
            ></div>
            <form
              className='w-[500px] bg-white rounded-lg p-5 flex flex-col gap-5'
              onSubmit={handleSubmit(handleLogin)}
            >
              <Input
                type='text'
                name='emailChangePassword'
                control={control}
                error={errors.emailChangePassword?.message}
              ></Input>
              <Input
                type={isShowPassword ? 'text' : 'password'}
                name='passwordChange'
                control={control}
                placeholder='Enter yout password'
                error={errors.passwordChange?.message}
              >
                <WrappIconPassword showPassword={isShowPassword} setShowPassword={setIsShowPassword} />
              </Input>

              <Button buttonType='submit' className='ml-auto !rounded-lg text-white mt-5' type='primary'>
                {isLoading ? (
                  <span className='circle-loading !translate-y-0 before:border-t-white before:border-b-white'></span>
                ) : (
                  'Submit'
                )}
              </Button>
            </form>
          </div>
        </Portal>
      )}
    </>
  )
}

export default withErrorBoundary(memo(ChangePassword), {
  FallbackComponent: ErrorComponent
})
