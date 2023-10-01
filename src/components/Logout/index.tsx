import { useMutation } from '@tanstack/react-query'
import Button from '../Button'
import QUERY_KEY from '~/configs/reactQuery'
import { logout } from '~/services/users'
import { getToken } from '~/utils/handleToken'
import { useNavigate } from 'react-router-dom'
import ROUTER from '~/configs/router'
import { ReactNode, memo } from 'react'

interface ILogout {
  children?: ReactNode
  className?: string
}

const Logout = ({ children, className }: ILogout) => {
  const { refreshToken } = getToken()

  const navigate = useNavigate()

  const { mutate } = useMutation({
    mutationKey: [QUERY_KEY.LOGOUT],
    mutationFn: (refToken: string) => logout(refToken),
    onSuccess: () => {
      navigate(ROUTER.LOGIN.path)
    }
  })

  const handleLogout = () => {
    mutate(`${refreshToken}`)
  }

  return (
    <Button className={`!bg-slate-200 !rounded-lg !px-4 ${className}`} onClick={handleLogout}>
      {children}
      Logout
    </Button>
  )
}

export default memo(Logout)
