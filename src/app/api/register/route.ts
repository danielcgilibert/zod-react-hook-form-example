import { SignUpSchema } from '@/app/schemas/auth-schema'
import { NextResponse } from 'next/server'
import { z } from 'zod'

export async function POST(request: Request, response: Response) {
  const body = await request.json()

  console.log(body)

  const result = SignUpSchema.parse(body)

  return NextResponse.json({ message: 'Hello, world!' })
}
