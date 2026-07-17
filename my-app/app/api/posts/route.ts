// basic of get and post
import { NextRequest , NextResponse } from "next/server";

export async function GET(request : NextRequest){

    const searchparams = request.nextUrl.searchParams;

    const limit  = searchparams.get("limit")
    const userId  = searchparams.get("userId")

    const params = new URLSearchParams();
    if(limit) params.set('_limit' , limit)
     if(userId) params.set('userId' ,userId)   

    const res =await fetch(`https://jsonplaceholder.typicode.com/posts?${params}`)
    const posts =await res.json();
console.log(JSON.stringify(posts))
    return NextResponse.json(posts)
    
}

