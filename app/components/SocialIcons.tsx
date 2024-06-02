import React from 'react'
import Image from "next/image";
import Link from "next/link";


const SocialIcons = (props:any) => {
    console.log(props,'prop')
  return (
   
        <Link href={props.path} target='blank'>
                <Image src={props.iconSvg} alt="img" className="w-full animate-bounce" />
         </Link>
 
  )
}

export default SocialIcons