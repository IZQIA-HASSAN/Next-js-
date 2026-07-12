'use client'
import React from 'react'
import Link from 'next/link' 
import { usePathname } from 'next/navigation'

const page = () => {

const pathname = usePathname()

    const links = [
        {href:"/" , Label :"Home"},
        {href:"/hello" , Label :"hello"},

    ];
    
  return (
    <div>
{links.map((link)=>{
    const isActive = pathname === link.href;
    return(
        <Link key={link.href} href={link.href} className={isActive ? "text-blue-600 font-bold" : "text-gray-500"}>

            {link.Label}
        </Link>
    )
})}
    </div>
  )
}

export default page