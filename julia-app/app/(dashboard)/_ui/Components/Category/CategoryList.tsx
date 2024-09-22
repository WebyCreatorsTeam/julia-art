// import { getCategories } from '@/app/lib/dashboard/action/category'
import React from 'react'
import ListItem from '../ListItem/ListItem'
import MainBackGroung from '../../MainBackgrd/MainBackGroung'
import AddBtn from '../../Buttons/AddBtn/AddBtn'
import { getCategories } from '@/app/lib/dashboard/data/category/category.data'

interface ICategory {
    type: string,
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
        <section style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", width: "100%" }}>
            {categories && categories.map((category, i: number) => (
                <MainBackGroung key={i}>
                    <h1>{category.type}</h1>
                    {category.subCategory.map((subCategory, i: number) => (
                        <ListItem key={i} userList={false} category={subCategory} />
                    ))}
                    <AddBtn link={true} linkText="Добавить Категорию" href={`/dashboard/category/${category.type}/new-sub-category`} />
                </MainBackGroung>
            ))}
        </section>
    )
}

export default CategoryList