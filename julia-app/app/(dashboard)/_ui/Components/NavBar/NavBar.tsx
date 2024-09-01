import Link from 'next/link'
import React from 'react'
import { navLinks } from './navigationLinks'

const NavBar = () => {
    return (
        <nav>
            {navLinks.map((link, index) => (
                <Link key={index} href={link.url}>{link.text}</Link>
            ))}
        </nav>
    )
}

export default NavBar