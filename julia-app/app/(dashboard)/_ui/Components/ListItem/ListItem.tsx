"use client"

import React, { useEffect } from 'react'
import EditBtn from '../../Buttons/EditBtn/EditBtn'
import Popup from '../../Popup/Popup'
import FormInput from '../../Input/Input'
import AuthBtn from '../../Buttons/AuthBtn/AuthBtn'
import { State } from '@/app/(dashboard)/_ts/definitions'
import { useFormState } from 'react-dom'
import { updateUser } from '@/app/lib/dashboard/action/auth'

interface IListItem {
    userList: boolean
    category?: {
        _id: string
    }
    user?: {
        _id: string
        userEmail: string
        userName: string
    }
}

const initialState: State = { message: null, success: null, errors: {} }

const ListItem = ({ userList, category, user }: IListItem) => {
    const [openPopupEdit, setOpenPopupEdit] = React.useState(false)
    const updateUserWithId = updateUser.bind(null, user!._id)
    const [userState, userUpdateAction] = useFormState(updateUserWithId, initialState);
    // const [cateforyState, categoryUpdateAction] = useFormState(updateCategoryWithId, initialState)

    const updateItem = () => {
        userList ? setOpenPopupEdit(true) : console.log(category!._id)
    }

    const deleteItem = () => {
        userList ? console.log(user!._id) : console.log(category!._id)
    }

    useEffect(() => {
        if (userState.success) setOpenPopupEdit(false)
    }, [userState])

    return (
        <section className='listItem'>
            {userList ? user!.userName : "category"}
            <div>
                <EditBtn edit={true} action={updateItem} />
                {openPopupEdit && (
                    <Popup closeAction={() => setOpenPopupEdit(false)}>
                        <h1>Редактировать {userList ? "пользователя" : "Категорию"}</h1>
                        <form action={userList ? userUpdateAction : "categoryUpdateAction"}>
                            <FormInput
                                state={userList ? userState : "cateforyState"}
                                type={"text"}
                                placeholder={userList ? "Имя пользователя" : "category"}
                                name={"userName"}
                                autoComp={"on"}
                                defaultValue={userList ? user!.userName : "category"}
                            />
                            {userList && <FormInput
                                state={userList ? userState : "cateforyState"}
                                type={"email"}
                                placeholder={userList ? "Email пользователя" : "category"}
                                name={"userEmail"}
                                autoComp={"on"}
                                defaultValue={userList ? user!.userEmail : "category"}
                            />}
                            <AuthBtn btnType={"submit"} btnText="Сохранить" />
                        </form>
                    </Popup>
                )}
                <EditBtn edit={false} action={() => { }} />
            </div>
        </section>
    )
}

export default ListItem