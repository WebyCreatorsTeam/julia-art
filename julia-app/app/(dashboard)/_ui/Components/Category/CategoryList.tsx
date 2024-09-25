import React from 'react'
import ListItem from '../ListItem/ListItem'
import MainBackGroung from '../../MainBackgrd/MainBackGroung'
import AddBtn from '../../Buttons/AddBtn/AddBtn'
import { getCategories } from '@/app/lib/dashboard/data/category/category.data'
import Image from 'next/image'
import EditBtn from '../../Buttons/EditBtn/EditBtn'

interface ICategory {
    type: string,
    img: string
    subCategory: Array<{
        title: string,
        img: string,
        _id: string
    }>
}
const CategoryList = async () => {
    const categories: Array<ICategory> = await getCategories()

    // console.log(categories)
    return (
        <>
            <h1>Категрии</h1>
            <section className='categories'>
                {categories && categories.map((category, i: number) => (
                    <MainBackGroung key={i}>
                        <div className='categories__one-category'>
                            <h2>{category.type}</h2>
                            <Image src={category.img} alt={`category ${category.type} image`} width={40} height={40} />
                            <EditBtn edit={true} action={""} />
                            <EditBtn edit={false} action={""} />
                        </div>
                        {category.subCategory.map((subCategory, i: number) => (
                            <ListItem key={i} userList={false} category={subCategory} />
                        ))}
                        <AddBtn link={true} linkText="Добавить Категорию" href={`/dashboard/category/${category.type}/new-sub-category`} />
                    </MainBackGroung>
                ))}
            </section>
        </>
    )
}

export default CategoryList