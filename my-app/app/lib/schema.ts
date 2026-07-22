import {z} from 'zod'

// type signupvalues = z.infer<typeof signupschema>;
export const signupschema = z.object({
  email : z.string().email('invalid email'),
  password : z.string().min(8 , "must be 8 characters"),
})

export type SignupValues = z.infer<typeof signupschema>