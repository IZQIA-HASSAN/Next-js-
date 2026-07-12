'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {usePathname} from 'next/navigation'

const page = () => {
    

    const pathname = usePathname()



    const router = useRouter()
    function handlesubmit(e){
        e.preventDefault()
        router.push("/Navbar")
    }
  return (
    <>
      <div><form  onSubmit={handlesubmit}><button>submit</button></form></div>
      <div>YOU ARE ON  : {pathname}</div>
      </>
    )
}

export default page