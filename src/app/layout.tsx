import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import { MainNav } from '@/components/main-nav'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans">
        <div className="relative flex min-h-screen flex-col bg-[#F5F6F8]">
          <MainNav />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
