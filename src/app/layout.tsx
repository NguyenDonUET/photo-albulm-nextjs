import Header from '@/components/Header'
import SideMenu from '@/components/SideMenu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Photo Album Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Toaster />
        <Header />
        <div className='flex'>
          <SideMenu />
          <div className='w-full px-8 pt-8'>{children}</div>
        </div>
      </body>
    </html>
  )
}
