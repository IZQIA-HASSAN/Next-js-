import React from 'react'

interface post{
  id :number;
  title :string;
  body :string;
  userid :number ;
}

// interface pageprops{
//   params : Promise<{slug:string}>
// }
 async function getpost(id:string ) : Promise<post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`  );
  return res.json();
 }


const page = async({ params }: { params: Promise<{ slug: string }> }) => {
  const {slug} = await params;
  const post = await getpost(slug)
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default page