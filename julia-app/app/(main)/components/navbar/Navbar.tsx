'use client';

import Link from "next/link"
import { navLinks } from "../text/navLinks"


const Navbar = () => {
  return (
   
 
    <nav>
           <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
        </nav>
     
       
  )
}

export default Navbar