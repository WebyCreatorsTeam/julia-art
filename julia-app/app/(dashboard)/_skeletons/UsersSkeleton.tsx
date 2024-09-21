import React from 'react'
import OneUserSkeleton from './OneUserSkeleton'

const UsersSkeleton = () => {
    return (
        <div className="admin__listOfUsers animate-pulse">
            <OneUserSkeleton/>
            <OneUserSkeleton/>
            <OneUserSkeleton/>
        </div>
    )
}

export default UsersSkeleton