"use client"

import Image from 'next/image'
import React from 'react'
import EditBtn from '../../Buttons/EditBtn/EditBtn'
import { deleteCategory } from '@/app/lib/dashboard/action/category'

interface CategoryItemProps {
    category: {
        _id: string,
        type: string,
        img: string
    }
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const deleteUserWithId = deleteCategory.bind(null, category!._id)

    const delOneCategory = () => {
        const areSure = window.confirm("Уверены, что хотите удалить?")
        if (areSure) {
            deleteUserWithId()
        }
    }
    return (
        <div 
        // className='categories__one-category' 
        style={{backgroundImage: `url(${category.img})`, backgroundSize: "cover" ,backgroundRepeat: "no-repeat", height: "150px" }}>
            <h2>{category.type}</h2>
            {/* <Image src={category.img} alt={`category ${category.type} image`} width={40} height={40} /> */}
            <EditBtn edit={true} action={""} />
            <EditBtn edit={false} action={delOneCategory} />
        </div>
    )
}

export default CategoryItem;