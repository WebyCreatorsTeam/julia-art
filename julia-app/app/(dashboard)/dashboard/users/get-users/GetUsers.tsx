"use server";

import ListItem from '@/app/(dashboard)/_ui/Components/ListItem/ListItem';
import { getUsers } from '@/app/lib/dashboard/data/users/users.data';
import React from 'react'


interface IUser {
    _id: string
    userEmail: string
    userName: string
}

const GetUsers = async () => {
    const users: Array<IUser> = await getUsers();

    return (
        <div className="admin__listOfUsers">
            {users && users.map((el, i) => (
                <ListItem userList={true} key={i} user={el} />
            ))}
        </div>
    )
}

export default GetUsers