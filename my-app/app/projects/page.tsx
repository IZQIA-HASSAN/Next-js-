import React from 'react'
import Link from 'next/link'
import {projects} from "../data/project"

const page = () => {
   
  return (
    <>
    <div className='text-3xl justify-center mt-10'>this is the projects page</div>
    <div className='flex gap-10'>
        {projects.map((p)=>(
            <div className='border w-80' key={p.title}>
            <div >{p.title}</div>
            
<p >{p.description}</p>
<Link href={`/projects/${p.slug}`}>
<button className='border rounded-md'>see details</button>
</Link>
            </div>
            
        ))}
        </div>
    
    </>
  )
}

export default page