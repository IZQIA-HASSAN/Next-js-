'use client'
import { useActionState, useState } from 'react'
import {sayhello , Actiontype} from "./actions/actions"

const initailstate :Actiontype = {message : ""}
const page = () => {
  const [ state , formAction ] = useActionState(sayhello , initailstate)

  return (
    <div>
      <form action={formAction}>
        <input type="text" placeholder='Enter name' name='name'  />

        <button type='submit'>submit</button>
        <p>{state.message}</p>
      </form>
      
    </div>
  )
}

export default page