'use client'
import { z } from 'zod'
import { useActionState , startTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signupschema, type SignupValues } from './lib/schema'
import { signupaction, type SignupActionstate } from './actions/signup'

const initialState : SignupActionstate = { success: true }
const page = () => {
  const [state, formAction, isPending] = useActionState(signupaction, initialState)

  const { register, handleSubmit, formState: { errors }, } = useForm<SignupValues>({
    resolver: zodResolver(signupschema),
  });
  const onValid = (data: SignupValues) => {
    const formData = new FormData()
    formData.append('email', data.email)
    formData.append('password', data.password)
    formAction(formData)

    startTransition(() => {
    formAction(formData)
  })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
        {state.errors?.email && <p>{state.errors.email[0]}</p>}

        <input {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
        {state.errors?.password && <p>{state.errors.password[0]}</p>}

      

        <button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Submit'}
        </button>
        {state.success?<p>Signed up successfully</p> : <p>not succesful operation</p>}
      </form>
    </div>
  )
}

export default page