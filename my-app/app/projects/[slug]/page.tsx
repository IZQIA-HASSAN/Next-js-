import React from 'react'
import { notFound } from 'next/navigation'
import { projects } from '@/app/data/project'

interface pageprop{
    params : {slug :string}
}

const page = async({params} : {params:Promise<{slug :string}>}) => {
  const {slug} = await params
const project = projects.find((p)=> p.slug === slug);

if(!project){
  notFound()
}

  return (
      <div className='mt-10'>
      <h1 className='text-3xl font-bold'>{project.title}</h1>
      <p className='mt-4'>{project.description}</p>
    </div>
  )
}

export default page