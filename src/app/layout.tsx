import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import LayourWrapper from '@/components/ui/LayourWrapper'

export const metadata: Metadata = {
  title: 'Ease Up',
  description: 'Connecting You with Skilled Handymen for All Your Home Improvement Needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <body className="font-sans">
      <main className='overflow-x-hidden'>
        <LayourWrapper/>
        {children}
      </main>
      <Toaster />
      </body>
    </html>
  )
}
