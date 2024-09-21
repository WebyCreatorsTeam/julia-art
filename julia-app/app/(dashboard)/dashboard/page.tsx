"use client"

import React, { Suspense, useState } from 'react'
import AddBtn from '../_ui/Buttons/AddBtn/AddBtn'
import Popup from '../_ui/Popup/Popup'
import FormInput from '../_ui/Input/Input'
import AuthBtn from '../_ui/Buttons/AuthBtn/AuthBtn'
import { useFormState } from 'react-dom'
import { CategoryState, State } from '../_ts/definitions'
// import { saveNewCategory } from '@/app/lib/dashboard/action/category'
import CategoryList from '../_ui/Components/Category/CategoryList'

const initialState: CategoryState = { message: null, success: null, errors: {} }

const CategoryPage = () => {
  const [openAddCategory, setOpenAddCategory] = useState<boolean>(false)
  // const [state, categoryFormAction] = useFormState(saveNewCategory, initialState)


  return (
    <section className='admin'>
      <AddBtn link={false} btnText="Добавить категорию" action={() => setOpenAddCategory(true)} />
      {openAddCategory && (
        <></>
        // <Popup closeAction={() => setOpenAddCategory(false)}>
        //   <h1>Добавить Категорию</h1>
        //   <form action={categoryFormAction}>
        //     <FormInput
        //       state={state}
        //       type={"text"}
        //       placeholder={"Название категории"}
        //       name={"categoryType"}
        //       autoComp={"on"}
        //     />
        //     <AuthBtn btnType={"submit"} btnText="Сохранить" />
        //   </form>
        // </Popup>
      )}
      <Suspense>
        {/* <CategoryList /> */}
      </Suspense>
      {/* <MainBackGroung> */}
      {/* wefwg */}
      {/* <div className="admin__listOfUsers">
          {users && users.map((el, i) => (
            <ListItem userList={true} key={i} user={el} />
          ))}
        </div> */}
      {/* </MainBackGroung> */}
    </section>
  )
}

export default CategoryPage