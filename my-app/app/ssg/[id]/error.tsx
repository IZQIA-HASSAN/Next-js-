'use client'
import React from 'react'

export default function Error({
    error,
    reset,
}:{
    error : Error & {digest? :string};
    reset:()=>void;

}){
    return (
<div>
    <h2>Something went wrong loading this post.</h2>
      <p>{error.message}</p>
      <button className='border cursor-pointer' onClick={() => reset()}>Try again</button>
</div>
    );
}