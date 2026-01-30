import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: 'ד״ר ליסה סיימון | פסיכולוגית קלינית',
  description: 'ד״ר ליסה סיימון - פסיכולוגית קלינית עם התמחות בטיפול פסיכולוגי למבוגרים. מרפאה פרטית, ניסיון אקדמי ומחקרי נרחב.',
  keywords: 'פסיכולוגית, טיפול פסיכולוגי, פסיכולוגית קלינית, ד״ר ליסה סיימון, מרפאה פרטית',
  authors: [{ name: 'Dr. Lisa Simon' }],
  openGraph: {
    title: 'ד״ר ליסה סיימון | פסיכולוגית קלינית',
    description: 'פסיכולוגית קלינית עם ניסיון אקדמי ומחקרי נרחב',
    type: 'website',
    locale: 'he_IL',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body
        className={`${heebo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
