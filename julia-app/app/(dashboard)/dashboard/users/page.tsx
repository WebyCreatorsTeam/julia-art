import { getUsers } from '@/app/lib/dashboard/data/users/users.data'
import React from 'react'
import AddBtn from '../../_ui/Buttons/AddBtn/AddBtn'
import MainBackGroung from '../../_ui/MainBackgrd/MainBackGroung'
import ListItem from '../../_ui/Components/ListItem/ListItem'

interface IUser {
  _id: string
  userEmail: string
  userName: string
}

const page = async () => {
  const users: Array<IUser> = await getUsers();
  
  return (
    <div>
      <AddBtn link={true} linkText="Добавить пользователя" href="/dashboard/users/save-new-user" />
      <MainBackGroung>
        <div style={{columnCount: 3, height: "100%", columnFill: "auto"}}>
          {users && users.map((el, i) => (<ListItem userList={true} key={i} user={el} />))}
        </div>
      </MainBackGroung>
    </div>
  )
}

export default page