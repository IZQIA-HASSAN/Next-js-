
'use server'

import { Action } from "@prisma/client/runtime/client";

export interface Actiontype{
    message : string;
}


export async function sayhello(prevState : Actiontype ,formData : FormData): Promise<Actiontype>{
const name =   formData.get('name') as string
if(!name || name.trim() === ''){
    return {message : 'please enter name'}
}
return {message : `hello this is my name ${name}`}
}