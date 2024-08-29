'use client';

import Link from "next/link"
import { navLinks } from "../../text/navLinks";



const Navbar = () => {
  return (


    <nav className="
     sm:w-[100%] sm:h-[220px] sm:left-[-1px] sm:absolute sm:bg-white sm:shadow-lg sm:rounded-lg sm:p-4 sm:top-[121px] 

      md:w-[100%] md:h-[50px] md:top-[122px] 
      md:flex md:justify-center 
      
      lg:w-[100%] lg:h-[50px] lg:top-[122px] 
      lg:flex lg:justify-center
    ">
      <ul className="
           sm:flex sm:flex-col sm:space-y-4 
            md:flex md:space-x-6 md:justify-center md:items-center
            md:rounded-b-[30px] md:rounded-t-none
            md:border md:w-[720px]

            lg:flex lg:justify-center lg:space-x-6 lg:items-center
            lg:rounded-b-[30px]
            lg:border lg:w-[794px]
            lg:rounded-t-none
            
           ">
        {navLinks.map((link, index) => (
          <li key={index}
            className="
            sm:text-[22px] sm:font-semibold sm:text-left sm:text-[#526768] sm:leading-[26.73px] sm:pl-4

            md:flex md:items-center md:justify-center
            md:text-[#526768]
            lg:flex lg:items-center lg:justify-center 
            lg:text-[#526768]
            ">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>


  )
}

export default Navbar