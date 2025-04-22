export const metadata = {
  title: 'Yogi Portfolio',
  description: 'Responsive Portfolio Website Design',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>{children}
     
      </body>
    </html>
  )
}