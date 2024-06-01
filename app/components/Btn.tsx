import React from "react";
import Link from "next/link";

const Btns = (props: any) => {
  return (
    <>
      {/* <Link
        href={props.path}
        className="btn btn-secondary
        absolute
         text-white bg-opacity-75
         hover:text-black
         hover:bg-white hover:bg-opacity-50
          border-none sm:btn-sm md:btn-md 
          lg:btn-lg z-50 ">
        {props.name}
      </Link> */}

      <Link
        href={props.path}
        
        className={`
        move-on
        btn  btn-lg
        absolute bottom-5 right-5 font-MonumentExtended
        font-bold
         bg-transparent border-none  
         no-underline hover:no-underline
         hover:bg-transparent
         
         z-50` }>
        {props.name} <span className="text-2xl">&#10140;</span>
      </Link>
    </>
  );
};

export default Btns;
