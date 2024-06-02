import React from "react";
import Link from "next/link";

const Btns = (props: any) => {
  return (
    <>
      <Link
        href={props.path}
        
        className={`
        move-on
        btn  btn-lg
        absolute  font-MonumentExtended
        font-bold
         bg-transparent border-none  
         no-underline hover:no-underline
         hover:bg-transparent
         ${props.btnPosition}
         
         z-50` }>
        {props.name} <span className="text-2xl animate-bounce  w-6 h-6">&#10140;</span>
      </Link>
    </>
  );
};

export default Btns;
