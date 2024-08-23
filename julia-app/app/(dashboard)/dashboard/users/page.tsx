import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <Link href={'/dashboard/users/save-new-user'}>Добавить пользователя</Link>
    </div>
  )
}

export default page