// "use server"

// import { getCategories } from '@/app/lib/dashboard/action/category'
import { getCategories } from '@/app/lib/dashboard/action/category'
import React from 'react'

const CategoryList = async () => {
    const categories = await getCategories()

    console.log(categories)
    return (
        <></>
        // categories.lenght > 0 && 
    )
}

export default CategoryList