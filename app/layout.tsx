// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className=" text-white font-sans">
        {children}
      </body>
    </html>

  )
}