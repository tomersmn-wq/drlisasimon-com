import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'השם חייב להכיל לפחות 2 תווים'),
  email: z.string().email('כתובת דוא"ל לא תקינה'),
  phone: z.string().optional(),
  message: z.string().min(10, 'ההודעה חייבת להכיל לפחות 10 תווים')
})

export type ContactFormData = z.infer<typeof contactFormSchema>
