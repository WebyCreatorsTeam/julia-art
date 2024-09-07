import { getUsers } from '@/app/lib/dashboard/data/users/users.data'
import Link from 'next/link'
import React from 'react'

const page = async () => {
  const users = await getUsers()

  return (
    <div>
      <Link href={'/dashboard/users/save-new-user'}>Добавить пользователя</Link>
      {users && users.map((el, i) => (<div key={i}>{el.userName}</div>))}
    </div>
  )
}

export default page