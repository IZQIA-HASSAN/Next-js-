
 
import React from 'react'

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}
const page =    async({ params }: PageProps) => {
    const { slug } = await params;
  return (
    <div><div>
      <h1>Docs Page</h1>
      <p>Raw array: {JSON.stringify(slug)}</p>
      <p>Joined path: {slug.join(" / ")}</p>
      <p>Number of segments: {slug.length}</p>
      <p>First segment: {slug[0]}</p>
    </div></div>
  )
}

export default page