"use client"

import { CategoryState } from '@/app/(dashboard)/_ts/definitions'
import AuthBtn from '@/app/(dashboard)/_ui/Buttons/AuthBtn/AuthBtn'
import MainBackGroung from '@/app/(dashboard)/_ui/MainBackgrd/MainBackGroung'
import { saveNewSubCateg } from '@/app/lib/dashboard/action/category'
import Link from 'next/link'
import React from 'react'
import { useFormState } from 'react-dom'

const initialState: CategoryState = { message: null, success: null, errors: {} }

interface IPageNewSubCategory {
  params: { categoryType: string }
}

const page = ({ params }: IPageNewSubCategory) => {
  const { categoryType } = params;
  const categoryTitle = decodeURIComponent(decodeURIComponent(categoryType)).replaceAll("-", " ");
  const [state, formAction] = useFormState(saveNewSubCateg, initialState)

  return (
    <div>
      <Link href='/dashboard'>Назад</Link>
      <MainBackGroung>
        <h1>{categoryTitle}</h1>
        <h2>Добавление Новой Подкатегории</h2>
        <form action={formAction}>
          <input type="text" name="categoryType" id="categoryType" hidden value={categoryType}/>
          <label htmlFor="subCategoryType">Название Категории</label>
          <input type="text" name="subCategoryType" id="subCategoryType" />
          <label htmlFor="subCategoryImg">Фото <span>(720*720)</span></label>
          <input type="file" name="subCategoryImg" id="subCategoryImg" multiple />
          <AuthBtn btnText={"Добавить"} btnType={"submit"} />
        </form>
      </MainBackGroung>
    </div>
  )
}

export default page