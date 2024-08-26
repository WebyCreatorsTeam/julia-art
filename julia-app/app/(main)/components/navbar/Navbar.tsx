'use client';

import Link from "next/link"
import { navLinks } from "../../text/navLinks";
// import { navLinks } from "../text/navLinks"


const Navbar = () => {
  return (


    <nav className="
     sm:w-[100%] sm:h-[220px] sm:left-[-1px] sm:absolute sm:bg-white sm:shadow-lg sm:rounded-lg sm:p-4 sm:top-[121px] 
     md:w-[720px] md:h-[50px] md:top-[122px] md:rounded-b-[30px]
    ">
      <ul className="
           sm:flex sm:flex-col sm:space-y-4 
          md:flex-row
           ">
        {navLinks.map((link, index) => (
          <li key={index}
            className="
            sm:text-[22px] sm:font-semibold sm:text-left
            sm:text-[#526768] sm:leading-[26.73px]
            sm:pl-4
            
           
           ">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>


  )
}

export default Navbar