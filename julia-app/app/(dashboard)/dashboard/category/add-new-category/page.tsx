import MainBackGroung from '@/app/(dashboard)/_ui/MainBackgrd/MainBackGroung'
import Link from 'next/link'
import React from 'react'
import AddCategoryForm from './AddCategoryForm/AddCategoryForm'

const page = () => {
  return (
    <div>
      <Link href='/dashboard'>Назад</Link>
      <MainBackGroung>
        <h1>Добавить новую категорию</h1>
        <AddCategoryForm/>
      </MainBackGroung>
    </div>
  )
}

export default page