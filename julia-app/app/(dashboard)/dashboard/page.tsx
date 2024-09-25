import AddBtn from '../_ui/Buttons/AddBtn/AddBtn';
import CategoryList from '../_ui/Components/Category/CategoryList'
import { Suspense } from 'react'

const CategoryPage = () => {
  return (
    <section className='admin'>
      <AddBtn link={true} linkText="Добавить Категрию" href="/dashboard/category/add-new-category" />
      <Suspense fallback={<></>}>
        <CategoryList />
      </Suspense>
    </section>
  )
}

export default CategoryPage;