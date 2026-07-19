import { NextRequest , NextResponse } from "next/server";


let submission : string[] = [];

export async function POST(request : NextRequest){
    const body  = await request.json();
    submission.push(body);
    return NextResponse.json({message : "recieved" , data:body})
}

export async function GET(){
    return NextResponse.json({message : "All submissions" , data :submission})
}