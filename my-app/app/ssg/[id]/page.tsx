import React from 'react';
import {Suspense} from 'react'
import {notFound} from 'next/navigation'


interface Post {
  title: string;
  id: number;
  body: string;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
    // cache :'no-store',
    next : {revalidate:60},
  });

  if (!res.ok) {
    notFound();
  }

  const post: Post = await res.json();

  return (
    <div>
      <div>hello this is jsonplaceholder</div>
      <Suspense fallback={<p>data is laoding</p>}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
          <small>Rendered at: {new Date().toISOString()}</small>
          </Suspense>

    </div>
  );
};

export default Page;