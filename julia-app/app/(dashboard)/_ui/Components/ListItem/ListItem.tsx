"use client"
import React from 'react'
import EditBtn from '../../Buttons/EditBtn/EditBtn'

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

const ListItem = ({ userList, category, user }: IListItem) => {
    const updateItem = () => {
        userList ? console.log(user!._id) : console.log(category!._id) 
        
    }

    const deleteItem = () => {
        userList ? console.log(user!._id) : console.log(category!._id) 
    }

    return (
        <section className='listItem'>
            {userList ? user!.userName : "category"}
            <div>
                <EditBtn edit={true} action={updateItem} />
                <EditBtn edit={false} action={deleteItem} />
            </div>
        </section>
    )
}

export default ListItem