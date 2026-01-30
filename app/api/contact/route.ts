import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { contactFormSchema } from '@/lib/contactSchema'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate input
    const validatedData = contactFormSchema.parse(body)
    
    // Insert into Supabase using admin client (bypasses RLS)
    const { data, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert([validatedData])
      .select()
    
    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit form' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { message: 'Success', data },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    )
  }
}
