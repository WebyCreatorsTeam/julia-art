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
       md:h-[122px] relative md:bg-smBackground
       lg:h-[129px] relative lg:bg-smBackground
        flex justify-center items-center
       ">
    <button
          onClick={handleToggleBar}
          className="
         sm:w-[60px] sm:h-[60px] sm:absolute sm:top-[31px] sm:right-10 
         sm:rounded-[10px] sm:bg-topBg sm:flex sm:justify-center sm:items-center
         md:hidden lg:hidden
        ">
          <Image
            src={isNavbarVisible ? "/close.svg" : "/vector.svg"}
            width={30}
            height={30}
            className="self-center"
            alt="btn vector png"
          />
        </button>
        
        <div className="
        sm:hidden
        md:flex md:items-center md:justify-center 
        lg:flex lg:items-center lg:justify-center
        ">
        <Image
            src={"/juliaLogo.png"}
            width={200}
            height={101.52}
            className=""
            alt="julia art logo"
          />
        </div>
      </div>


      <div className={`${isNavbarVisible ? 'flex' : 'hidden'} md:flex lg:flex`}>
      <Navbar />
      </div>
    </>
  )
}

export default TopBar