import React from 'react'
import Input from '../_ui/Input'
import "../_style/_pages/_login.scss"

const FormInput = [
  { type: "text", placeholder: "Введите Логин" },
  { type: "password", placeholder: "Введите Пароль" },
]

const page = () => {
  return (
    <section className='loginPage_dash'>
      <div className='loginPage_dash__container'>
        <h1>Вход в <br /> админ-панель</h1>
        <form action="">
          {FormInput.map((el, i) => (<Input key={i} type={el.type} placeholder={el.placeholder} />))}
        </form>
      </div>
    </section>
  )
}

export default page;