import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div>
            <Link href='/dashboard/users'>Назад</Link>
            <div>
                <h1>Добавить нового пользователя</h1>
                <form>
                    
                </form>
            </div>
        </div>
    )
}

export default page