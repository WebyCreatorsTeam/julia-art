import React from 'react'
// import Input from '../_ui/Input'
import "../_style/_pages/_login.scss"
import AuthBtn from '../_ui/Buttons/AuthBtn/AuthBtn'
import { LoginInputFileds } from '../_form-fields/login'
import FormInput from '../_ui/Input/Input'

const page = () => {
  return (
    <section className='loginPage_dash'>
      <div className='loginPage_dash__container'>
        <h1>Вход в <br /> Админ-панель</h1>
        <form action="">
          {LoginInputFileds.map((el, i) => (<FormInput key={i} type={el.type} placeholder={el.placeholder} name={el.name}/>))}
          <AuthBtn btnText="Войти"/>
        </form>
      </div>
    </section>
  )
}

export default page;