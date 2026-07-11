'use client'

import React, { useState } from 'react'

interface Likebuttonprops{
    postId : number ;
    initialLikes : number;
}


const Likebutton = ({postId , initialLikes} : Likebuttonprops) => {
    const [liked , setLiked] = useState<boolean>(false)
    const [likes , setLikes] = useState<number>(initialLikes)

    function handleclick(){
        if(liked){
            setLikes(likes -1)
        }else {
            setLikes(likes + 1)
        }
        setLiked(!liked)
    }
  return (
    <div>
        <button className='border' onClickCapture={handleclick}>{liked ? "❤️" : "🤍"} {likes} likes (Post #{postId})</button>
    </div>
  )
}

export default Likebutton