import { z } from 'zod'

export const SignUpSchema = z
  .object({
    firstName: z
      .string({
        required_error: 'First name is required',
      })
      .min(2)
      .max(50),
    lastName: z.string(),
    email: z.string().email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type SignUpSchemaType = z.infer<typeof SignUpSchema>
