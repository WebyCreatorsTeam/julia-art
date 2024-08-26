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
       lg:bg-red-500"
       >

        <button
          onClick={handleToggleBar}
          className="
        
         sm:w-[60px] sm:h-[60px] sm:absolute sm:top-[31px] sm:right-10 
         sm:rounded-[10px] sm:bg-topBg sm:flex sm:justify-center sm:items-center
         md:hidden
         lg:hidden
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