import { Outlet, useNavigate } from 'react-router'
import NavBar from '~/components/NavBar'
import Header from '~/components/Header'
import { CreateProjectModal, Modal } from '~/components/Modal'
import useModal from '~/store/modal'
import { CardEdit } from '~/modules/Board'
import { useQuery } from '@tanstack/react-query'
import { getProjects } from '~/services/projects'
import QUERY_KEY from '~/configs/reactQuery'
import useWorkSpace from '~/store/workSpace'
import useUser from '~/store/user'
import { useEffect } from 'react'
import ROUTER from '~/configs/router'
import { getToken } from '~/utils/handleToken'
import { getMe } from '~/services/users'

const MainLayout = () => {
  const cardEdit = useModal((state) => state.cardEdit)
  const setProjects = useWorkSpace((state) => state.setProjects)
  const setUser = useUser((state) => state.setUser)

  const { token } = getToken()

  const navigate = useNavigate()

  const { data: responseUser } = useQuery({ queryKey: [QUERY_KEY.GET_ME], queryFn: getMe })

  useQuery({
    queryKey: [QUERY_KEY.GET_BOARD],
    queryFn: getProjects,
    onSuccess(data) {
      setProjects(data.boards)
    },
    enabled: Boolean(token)
  })

  useEffect(() => {
    if (token) return
    navigate(ROUTER.LOGIN.path)
  }, [token])

  useEffect(() => {
    if (!responseUser) return
    setUser(responseUser.user)
  }, [responseUser?.user])

  if (!responseUser?.user) return

  return (
    <div className='px-5 py-2'>
      <Header />
      <div className='flex gap-10 mt-5'>
        <NavBar />

        <Modal>{cardEdit ? <CardEdit /> : <CreateProjectModal />}</Modal>

        <div className='bg-white bg-opacity-30 rounded-xl p-3 shadow-boxPrimary w-full h-contentScreen overflow-x-hidden overscroll-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainLayout
