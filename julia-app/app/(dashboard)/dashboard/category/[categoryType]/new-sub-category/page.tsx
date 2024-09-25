import { CategoryState } from '@/app/(dashboard)/_ts/definitions'
import MainBackGroung from '@/app/(dashboard)/_ui/MainBackgrd/MainBackGroung'
import Link from 'next/link'
import React from 'react'

const initialState: CategoryState = { message: null, success: null, errors: {} }

interface IPageNewSubCategory {
  params: { categoryType: string }
}

const page = ({ params }: IPageNewSubCategory) => {
  const { categoryType } = params;
  const categoryTitle = decodeURIComponent(decodeURIComponent(categoryType)).replaceAll("-", " ");
  
  return (
    <div>
      <Link href='/dashboard'>Назад</Link>
      <MainBackGroung>
        {/* <h1>{categoryTitle}</h1> */}
        <h2>Добавление Новой Подкатегории в Категорию {categoryTitle}</h2>
        {/* <form action={categoryFormAction}>
        <FormInput
          state={state}
          type={"text"}
          placeholder={"Название категории"}
          name={"categoryType"}
          autoComp={"on"}
        />
        <AuthBtn btnType={"submit"} btnText="Сохранить" />
      </form> */}
      </MainBackGroung>
    </div>
  )
}

export default page