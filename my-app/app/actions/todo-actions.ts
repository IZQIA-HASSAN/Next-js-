"use server"

import {db} from "@/app/lib/db";
import {revalidatePath} from 'next/cache'


export async function AddTodo(prevState :any , formData : FormData){
    const title = formData.get("title") as string;

    if(!title || title.trim() === ""){
        return {error :"title is required"}
    }
    await db.todo.create({data :{title}})
    revalidatePath("/")

    return {error : ""}

}