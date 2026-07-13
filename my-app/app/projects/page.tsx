import React from 'react'
import Link from 'next/link'

const page = () => {
    const project = [
        {slug:'project-1' ,title:"Project 1" , description : "This is my project first" },
        {slug:'project-2' ,title:"Project 2" , description : "This is my project second" },
    ]
  return (
    <>
    <div className='text-3xl justify-center mt-10'>this is the projects page</div>
    <div className='flex gap-10'>
        {project.map((p)=>(
            <div className='border w-80'>
            <div key={p.title}>{p.title}</div>
            
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