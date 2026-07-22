"use server"

import { signupschema } from "../lib/schema"

export type SignupActionstate = {
    success : boolean ;
    errors?:Record<string , string[]>
}


export async function signupaction(_prevState : SignupActionstate,
    formData : FormData,) : Promise<SignupActionstate>{
    const raw = Object.fromEntries(formData)
    const result = signupschema.safeParse(raw)

    if(!result.success){
        return {success : false , errors : result.error.flatten().fieldErrors}
    }

    console.log('validated on server ' , result.data)
    return {success :true}

}