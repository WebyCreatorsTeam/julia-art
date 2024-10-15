import React from 'react'
import EditBtn from '../../Buttons/EditBtn/EditBtn'
import FormInput from '../../Input/Input'
import Popup from '../../Popup/Popup'

interface IItemListProps {
    title: string
    updateItem: string
    deleteItem: string
    inputPlaceholder: string
    inputName: string
    inputValue: string
    userList: boolean
    children: any
}
const ItemList = ({
    title,
    updateItem,
    deleteItem,
    // inputPlaceholder,
    // inputName,
    // inputValue,
    // userList,
    children
}: IItemListProps) => {
    const [openPopupEdit, setOpenPopupEdit] = React.useState(false)

    return (
        <section className='listItem'>
            <p>{title}</p>
            <EditBtn edit={true} action={() => setOpenPopupEdit(true)} />
            <EditBtn edit={false} action={deleteItem} />
            <Popup closeAction={() => { }}>
                <p>{updateItem}</p>
            </Popup>
            <form>
                {children}
            </form>
        </section>
    )
}

export default ItemList

/*
                <FormInput
                    type="text"
                    placeholder={inputPlaceholder}
                    name={inputName}
                    autoComp="on"
                    defaultValue={inputValue}
                />
                {userList && (
                    <FormInput
                        // state={userList ? userState : "cateforyState"}
                        type={"email"}
                        placeholder={userList ? "Email пользователя" : "category"}
                        name={"userEmail"}
                        autoComp={"on"}
                        defaultValue={userList ? user!.userEmail : "category"}
                    />
                )}
*/