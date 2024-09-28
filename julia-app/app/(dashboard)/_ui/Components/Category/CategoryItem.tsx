"use client"

import Image from 'next/image'
import React from 'react'
import EditBtn from '../../Buttons/EditBtn/EditBtn'
import { deleteCategory } from '@/app/lib/dashboard/action/category'
import Popup from '../../Popup/Popup'

interface CategoryItemProps {
    category: {
        _id: string,
        type: string,
        img: string
    }
}

const CategoryItem = ({ category }: CategoryItemProps) => {
    const [openPopupEdit, setOpenPopupEdit] = React.useState(false)
    const deleteUserWithId = deleteCategory.bind(null, category!._id)

    const delOneCategory = () => {
        const areSure = window.confirm("Уверены, что хотите удалить?")
        if (areSure) {
            deleteUserWithId()
        }
    }

    return (
        <>
            <div
                className='categories__one-category'
                style={{ backgroundImage: `url(${category.img})` }}>
                <h2>{category.type}</h2>
                <EditBtn edit={true} action={() => setOpenPopupEdit(true)} />
                <EditBtn edit={false} action={delOneCategory} />
            </div>
                {openPopupEdit && (
                    <Popup closeAction={() => setOpenPopupEdit(false)}>
                        <form action="">
                            <label htmlFor="categoryType">Название категории</label>
                            <input type="text" id="categoryType" defaultValue={category.type} />
                            <label htmlFor="categoryImg">Изображение категории</label>
                            <Image src={category.img} alt={`category ${category.type} image`} width={200} height={200} />
                            <input type="file" id="categoryImg" />
                            <button type="submit">Сохранить</button>
                        </form>
                    </Popup>
                )}
        </>
    )
}

export default CategoryItem;