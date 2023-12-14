import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/javascripts/navigation'
import Footer from '../components/javascripts/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TNTT Xavie Can',
  description: 'Doan Xavie Can, SW Seattle Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
