import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/toaster'
import LayourWrapper from '@/components/ui/LayourWrapper'

export const metadata: Metadata = {
  title: 'EaseUp - Connecting You with Skilled Handymen',
  description: 'EaseUp is a dynamic service provider offering home improvement solutions including plumbing, electrical work, tiling, painting, and carpentry. Connect with skilled handymen easily through our mobile app.',
  keywords: ['handyman services', 'home improvement', 'plumbing', 'electrical work', 'carpentry', 'painting', 'tiling', 'Ghana', 'Accra'],
  authors: [{ name: 'EaseUp Limited' }],
  openGraph: {
    title: 'EaseUp - Connecting You with Skilled Handymen',
    description: 'Connect with skilled handymen for all your home improvement needs through our easy-to-use mobile app.',
    type: 'website',
  },
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
