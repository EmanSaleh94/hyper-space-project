import React from "react";
import Image from "next/image";
import loopImage from "../../public/loopimage.gif";
import square from "../../public/square.gif";
import Btns from "../components/Btn";


const NewHome = () => {
  return (
    <div className=" z-0">
      <Image
      alt="Mountains"
      src={square}
      priority
      
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}/>
    </div>
  );
};

export default NewHome;
