import Header from '@/components/Header'
import './globals.css'
import Container from '@/components/Container'
import localFont from 'next/font/local';
import Hero from '@/components/Hero';

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: "medium"
    },
    {
      path: '../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: "bold"
    }
  ]
})

const migra = localFont({
  src: [
    {
      path: '../public/fonts/Migra-Extrabold.otf',
      weight: '700',
      style: "bold"
    }
  ]
})

export const metadata = {
  title: 'Jefferson Balde | Software Developer',
  description: 'Jefferson Balde Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={neueMontreal.className}>
        <Header />
        <main className='w-full'>
        </main>
        {children}
      </body>
    </html>
  ) 
}
