import React from 'react';
import './globals.css'
import localFont from 'next/font/local'
import AnimatedBackground from './components/AnimatedBackground'

const mistoFont = localFont({
  src: './fonts/misto.woff2',
  variable: '--font-misto',
})

const neueMetanaFont = localFont({
  src: './fonts/NeueMetana-Regular.woff2',
  variable: '--font-neue-metana',
})

export const metadata = {
  title: 'OneByOne Podcast',
  description: 'OneByOne Podcast',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${mistoFont.variable} ${neueMetanaFont.variable} font-sans`}>
      <body style={{ margin: 0, padding: 0 }}>
        <AnimatedBackground />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout