import React from 'react'
import Likebutton from './Likebutton'

interface Post{
    id :number ;
    title : string;
    body : string;
}

interface PageProps{
params : Promise<{id:string}>
}
async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}
const page = async({params} : PageProps) => {
    const { id } = await params;
  const post = await getPost(id);
  return (
     <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Likebutton postId={post.id} initialLikes={0} />
    </div>
  )
}

export default page