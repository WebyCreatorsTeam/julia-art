import React from 'react'
import ListItem from '../ListItem/ListItem'
import MainBackGroung from '../../MainBackgrd/MainBackGroung'
import AddBtn from '../../Buttons/AddBtn/AddBtn'
import { getCategories } from '@/app/lib/dashboard/data/category/category.data'
import CategoryItem from './CategoryItem'

interface ICategory {
    _id: string,
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
    
    return (
        <>
            <h1>Категрии</h1>
            <section className='categories'>
                {categories && categories.map((category, i: number) => (
                    <MainBackGroung key={i}>
                        <CategoryItem category={category}/>
                        {category.subCategory.map((subCategory, i: number) => (
                            <ListItem key={i} userList={false} category={subCategory} />
                        ))}
                        <AddBtn link={true} linkText="Добавить Категорию" href={`/dashboard/category/${decodeURIComponent(decodeURIComponent(category.type).replaceAll(" ", "-"))}/new-sub-category`} />
                    </MainBackGroung>
                ))}
            </section>
        </>
    )
}

export default CategoryList