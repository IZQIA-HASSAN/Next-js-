import React from 'react'
import Link from 'next/link'
import {projects} from "../data/project"
import {Post} from "../data/post"

const page =async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts' ,{
        next : {revalidate : 60},
    })

    const post : Post[] = await res.json();
   
  return (
    <>
       <div className="text-3xl justify-center mt-10">this is the projects page</div>
      <div className="flex flex-wrap gap-6 mt-6">
        {post.slice(0, 6).map((post) => (
          <div className="border w-80 p-4 rounded-md" key={post.id}>
            <div className="font-bold">{post.title}</div>
            <p className="text-sm mt-2">{post.body}</p>
            <Link href={`/projects/${post.id}`}>
              <button className="border rounded-md mt-3 px-3 py-1">see details</button>
            </Link>
          </div>
        ))}
      </div>
    
    </>
  )
}

export default page