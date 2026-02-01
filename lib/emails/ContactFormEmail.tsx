import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

/**
 * Props for the ContactFormEmail component
 */
interface ContactFormEmailProps {
  name: string
  email: string
  phone?: string
  message: string
  submittedAt?: string
}

/**
 * Email template for contact form submissions
 * Renders a professional, well-formatted email with all form details
 */
export default function ContactFormEmail({
  name,
  email,
  phone,
  message,
  submittedAt,
}: ContactFormEmailProps) {
  const formattedDate = submittedAt
    ? new Date(submittedAt).toLocaleString('he-IL', {
        dateStyle: 'full',
        timeStyle: 'short',
      })
    : new Date().toLocaleString('he-IL', {
        dateStyle: 'full',
        timeStyle: 'short',
      })

  return (
    <Html>
      <Head />
      <Preview>טופס יצירת קשר חדש מ-{name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>📬 הודעה חדשה מטופס יצירת קשר</Heading>
          
          <Text style={text}>
            התקבלה הודעה חדשה מאתר ד״ר ליסה:
          </Text>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>
              פרטי השולח
            </Heading>
            
            <Text style={detailLabel}>שם מלא:</Text>
            <Text style={detailValue}>{name}</Text>

            <Text style={detailLabel}>כתובת דוא״ל:</Text>
            <Text style={detailValue}>
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>

            {phone && (
              <>
                <Text style={detailLabel}>טלפון:</Text>
                <Text style={detailValue}>
                  <a href={`tel:${phone}`} style={link}>
                    {phone}
                  </a>
                </Text>
              </>
            )}
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={h2}>
              תוכן ההודעה
            </Heading>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            נשלח בתאריך: {formattedDate}
          </Text>

          <Text style={footer}>
            הודעה זו נשלחה אוטומטית ממערכת טופס יצירת הקשר באתר.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles for the email template
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
}

const h1 = {
  color: '#1a1a1a',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 40px',
  textAlign: 'center' as const,
}

const h2 = {
  color: '#374151',
  fontSize: '18px',
  fontWeight: '600',
  margin: '20px 0 12px',
}

const text = {
  color: '#374151',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 40px',
}

const section = {
  padding: '0 40px',
}

const detailLabel = {
  color: '#6b7280',
  fontSize: '13px',
  fontWeight: '600',
  textTransform: 'uppercase' as const,
  margin: '16px 0 4px',
  letterSpacing: '0.5px',
}

const detailValue = {
  color: '#1a1a1a',
  fontSize: '16px',
  margin: '0 0 8px',
  lineHeight: '24px',
}

const messageText = {
  color: '#1a1a1a',
  fontSize: '16px',
  lineHeight: '26px',
  whiteSpace: 'pre-wrap' as const,
  backgroundColor: '#f9fafb',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
}

const hr = {
  borderColor: '#e5e7eb',
  margin: '26px 0',
}

const link = {
  color: '#2563eb',
  textDecoration: 'none',
}

const footer = {
  color: '#6b7280',
  fontSize: '12px',
  lineHeight: '20px',
  padding: '0 40px',
  marginTop: '12px',
}
