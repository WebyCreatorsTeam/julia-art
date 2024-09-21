import React, { Suspense } from 'react'
import AddBtn from '../../_ui/Buttons/AddBtn/AddBtn'
import MainBackGroung from '../../_ui/MainBackgrd/MainBackGroung'
import GetUsers from './get-users/GetUsers'
import UsersSkeleton from '../../_skeletons/UsersSkeleton'

const page = async () => {
  return (
    <section className='admin'>
      <AddBtn link={true} linkText="Добавить пользователя" href="/dashboard/users/save-new-user" />
      <MainBackGroung>
        <Suspense fallback={<UsersSkeleton />}>
          <GetUsers />
        </Suspense>
      </MainBackGroung>
    </section>
  )
}

export default page