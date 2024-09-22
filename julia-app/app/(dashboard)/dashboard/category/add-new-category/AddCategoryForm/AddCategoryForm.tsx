"use client"

import { State } from '@/app/(dashboard)/_ts/definitions';
import AuthBtn from '@/app/(dashboard)/_ui/Buttons/AuthBtn/AuthBtn';
import { saveNewCategory } from '@/app/lib/dashboard/action/category';
import { useFormState } from 'react-dom';

const initialState: State = { message: null, success: null, errors: {} }
const AddCategoryForm = () => {
    const [state, formAction] = useFormState(saveNewCategory, initialState)
    // console.log(state)

    return (
        <form action={formAction}>
            <label htmlFor="categoryType">Название Категории</label>
            <input type="text" name="categoryType" id="categoryType" />
            <label htmlFor="categoryImg">Фото <span>(720*720)</span></label>
            <input type="file" name="categoryImg" id="categoryImg" multiple />
            <AuthBtn btnText={"Добавить"} btnType={"submit"} />
        </form>
    )
}

export default AddCategoryForm