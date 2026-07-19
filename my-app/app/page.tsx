'use client'
import { useState } from 'react'


const page = () => {
  const [username , setUsername] = useState("")
  const [result ,setResult] = useState<any>(null)

  const handlesubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const res = await fetch('/api/data' , {
      method : "POST",
      headers : {"Content-Type" : "application/json"},
      body :JSON.stringify({username})
    })
    const data = await res.json()
    setResult(data)
  }

  const fetchall = async ()=>{
    const res = await fetch ("/api/data" , {method:"GET"})
    const data = await res.json()
    setResult(data)
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter name' value={username} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value)} />

        <button type='submit'>submit</button>
      </form>
      <button onClick={fetchall}>Fetch all</button>
      {result &&(
        <pre>{JSON.stringify(result , null , 2)}</pre>
      )}
    </div>
  )
}

export default page