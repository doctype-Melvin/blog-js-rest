import './globals.css'

export const metadata = {
  title: 'Secret Sauce Blog',
  description: 'Consuming API for the fun of it',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
