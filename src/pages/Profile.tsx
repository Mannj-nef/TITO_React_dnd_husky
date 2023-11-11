import Button from '~/components/Button'
import { ChangePassword, CoverPhoto, TopProfile, WrappreFeature } from '~/modules/Profile'
import DatePicker from 'react-datepicker'
import useUser from '~/store/user'
import { useEffect, useState } from 'react'
import { withErrorBoundary } from 'react-error-boundary'
import ErrorComponent from '~/components/Error'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import YUP_SCHEMA from '~/constants/validates/yupSchema'
import { Input } from '~/components/Inputs'
import Logout from '~/components/Logout'
import { useMutation } from '@tanstack/react-query'
import QUERY_KEY from '~/configs/reactQuery'
import { RequestUpdateMe } from '~/types/users'
import { updateMe } from '~/services/users'
import { toast } from 'react-toastify'
import { USER_MESSAGE } from '~/constants/messages'

interface IFormInputs {
  email: string
  name: string
  password?: string
  confirmPassword?: string
}

const schema: yup.ObjectSchema<IFormInputs> = yup.object({
  name: YUP_SCHEMA.NAME,
  email: YUP_SCHEMA.EMAIL,
  password: YUP_SCHEMA.PASSWORD.optional(),
  confirmPassword: YUP_SCHEMA.PASSWORDCONFIRMATION.optional()
})

const Profile = () => {
  const user = useUser((state) => state.user)
  const setUser = useUser((state) => state.setUser)
  const password = useUser((state) => state.password)
  const [birthDay, setBirthDay] = useState(new Date())

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.UPDATE_ME],
    mutationFn: (payload: RequestUpdateMe) => updateMe(payload)
  })

  const { control, handleSubmit, formState, setValue } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  })

  const { errors } = formState

  const handleUpdateInfoUser = (value: IFormInputs) => {
    if (!user) return

    const userUpdate: RequestUpdateMe = {
      ...value,
      background: user.background,
      avatar: user.avatar,
      date_of_birth: birthDay || user.date_of_birth
    }

    mutate(userUpdate, {
      onSuccess: (data) => {
        setUser(data.user)
        toast.success(USER_MESSAGE.UPDATE_USER_SUCCESS)
      },
      onError: () => {
        toast.error(USER_MESSAGE.UPDATE_USER_ERROR)
      }
    })
  }

  useEffect(() => {
    if (!user) return
    setValue('name', user.name)
    setValue('email', user.email)

    setBirthDay(new Date(user.date_of_birth))
  }, [user])

  useEffect(() => {
    if (!password) return
    setValue('password', password)
    setValue('confirmPassword', password)
  }, [password])

  if (!user) return

  return (
    <div className='-m-3'>
      {/* banner */}
      <CoverPhoto />

      {/* content */}
      <div className='p-5'>
        <TopProfile />

        <div className='flex items-center justify-between border-b-2 pb-5'>
          <div>
            <h3 className='text-xl'>Your Profile</h3>
            <p className='text-text1 text-sm italic opacity-70'>Update your profile photo and details here</p>
          </div>

          <div className='flex gap-2'>
            <Button className='!px-5 !rounded-lg border-2 shadow-boxPrimary'>Cancel</Button>
            <Button
              className='!px-5 !rounded-lg bg-primary text-white shadow-boxPrimary'
              onClick={handleSubmit(handleUpdateInfoUser)}
            >
              Save Change
            </Button>
          </div>
        </div>

        <WrappreFeature title='Public profile' description='This will be display on your profile'>
          <Input name='name' control={control} error={errors.name?.message}></Input>
          <Input name='email' control={control} error={errors.email?.message}></Input>
        </WrappreFeature>

        <WrappreFeature title='Private profile' description='This will be not display on your profile'>
          <DatePicker
            selected={birthDay}
            onChange={(date: Date) => setBirthDay(date)}
            dateFormat='MM/dd/yyy'
            className='p-3 border-2 !rounded-lg w-[350px] shadow-boxPrimary'
          />
          {password ? (
            <>
              <Input type='password' name='password' placeholder='Enter your new Password' control={control}></Input>
              <Input type='password' name='confirmPassword' control={control} placeholder='Confirm password'></Input>
            </>
          ) : (
            <ChangePassword />
          )}
        </WrappreFeature>

        <div className='mt-5 justify-end flex gap-3'>
          <Logout />
          <Button className='!bg-slate-200 !rounded-lg !px-4'>Remove account</Button>
        </div>
      </div>
    </div>
  )
}

export default withErrorBoundary(Profile, {
  FallbackComponent: ErrorComponent
})
