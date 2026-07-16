import React from 'react';
// import {Suspense} from 'react'
import {notFound} from 'next/navigation'


interface Post {
  title: string;
  id: number;
  body: string;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
await new Promise((resolve)=>setTimeout(resolve , 5000));
  const res = await fetch(`https://jsonplaceolder.typicode.com/posts/${id}`,{
    // cache :'no-store',
    next : {revalidate:60},
  });
  console.log('FETCH URL:', `https://jsonplaceholder.typicode.com/posts/${id}`);
console.log('STATUS:', res.status);

  if(res.status == 404){
    notFound()
  }

  if (!res.ok) {
    throw new Error (`Failed to fetch post ${res.status}`)
  }

  const post: Post = await res.json();

  return (
    <div>
      <div>hello this is jsonplaceholder</div>
      
      <h1>{post.title}</h1>
      <p>{post.body}</p>
          <small>Rendered at: {new Date().toISOString()}</small>
          

    </div>
  );
};

export default Page;