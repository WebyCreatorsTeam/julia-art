"use client";

import { RegInputFileds } from '@/app/(dashboard)/_form-fields/_reg-fields'
import AuthBtn from '@/app/(dashboard)/_ui/Buttons/AuthBtn/AuthBtn'
import FormInput from '@/app/(dashboard)/_ui/Input/Input';
// import FormInput from '@/app/(dashboard)/_ui/Input'
import { registUser, State } from '@/app/lib/dashboard/action/auth'
import Link from 'next/link'
import { useFormState } from 'react-dom';

const initialState: State = { message: null, success: null, errors: {} }
const SaveNewUser = () => {
    const [state, formAction] = useFormState(registUser, initialState)

    return (
        <div>
            <Link href='/dashboard/users'>Назад</Link>
            <div className='regPage'>
                <div className='regPage__form'>
                    <h1>Добавить нового пользователя</h1>
                    <form action={formAction}>
                        {RegInputFileds.map((el, i) => (<FormInput key={i} state={state} type={el.type} placeholder={el.placeholder} name={el.name} autoComp={el.autoComp}/>))}
                        <AuthBtn btnText="Зарегистрировать" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SaveNewUser