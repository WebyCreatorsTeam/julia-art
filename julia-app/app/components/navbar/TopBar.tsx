'use client';

import { useState } from "react";
import Navbar from "./Navbar";
import Image from 'next/image';


const TopBar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

 const handleToggleBar = () => {
    setIsNavbarVisible((prevState) => !prevState);
    }

  return (
   <>
   <div className="
   sm:bg-smBackground sm:h-[121px] relative 
    md:bg-green-500 
     lg:bg-red-500">

     <button
     onClick={handleToggleBar}
     className="
         md:hidden
         lg:hidden
         w-[60px] 
          h-[60px] 
         absolute 
         top-[31px] 
         right-10 
         rounded-[10px]
         bg-topBg
         flex 
         justify-center 
         items-center
        ">
        <Image 
        src={isNavbarVisible ? "/close.svg" : "/vector.svg"}
        width={30}
        height={30}
        className="self-center"
        alt="btn vector png"
        />    
      </button>
 </div>

 <div className="">
  {isNavbarVisible && <Navbar />}
 </div>
 </>
  )
}

export default TopBar