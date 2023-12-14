import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '../components/javascripts/navigation'
import Footer from '../components/javascripts/footer'
import { basePath } from '../../next.config'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TNTT Xavie Can',
  description: 'Doan Xavie Can, SW Seattle Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
