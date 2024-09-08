"use client"

import React, { useState, useRef, useEffect, FC } from 'react'
import { useMediaQuery } from 'react-responsive'
import Close from './Close'
import Menu from './Menu'
import Link from 'next/link'
import { navLinks } from './navigationLinks'
// import { useSession } from 'next-auth/react'

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const desktop = useMediaQuery({ query: '(min-width: 961px)' })
    const ref: any = useRef(null);
    // const data = useSession()

    // console.log(data)

    useEffect(() => {
        if (desktop) {
            setIsOpen(false)
        }
    }, [desktop])

    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                setIsOpen(false)
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);

    return (
        <header>
            <nav className='elementWidth'>
                <button aria-label='menu' title="Меню" className='block lg:hidden' onClick={() => setIsOpen(!isOpen)}>{isOpen ? <Close /> : <Menu />}</button>
                <p className='block lg:hidden'>Привет, Юльчик</p>
                <div className={`navigation ${isOpen ? 'flex' : 'hidden'} lg:flex`} ref={ref}>
                    <div className={`navigation__links`}>
                        {navLinks.map((nav, ind) => (
                            <Link
                                key={ind}
                                href={nav.url}
                                onClick={() => setIsOpen(false)}
                            >{nav.text}</Link>
                        ))}
                    </div>
                    <div className='navigation__links'>
                        <p className='hidden lg:block'>Привет, Юльчик</p>
                        <button className='exitBtn'>Выход</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar