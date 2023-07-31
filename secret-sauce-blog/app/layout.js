import './globals.css';
import localFont from '@next/font/local';
import Link from 'next/link';

const roboto = localFont({
  src: [
    {
      path: '../public/fonts/Roboto-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Roboto-Bold.ttf',
      weight: '600',
    },
    {
      path: '../public/fonts/Roboto-Light.ttf',
      weight: '200',
    },
  ],
  variable: '--font-roboto',
});

export const metadata = {
  title: '🍯 Honeypot Blog',
  description: 'Consuming API for the fun of it',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.variable} font-sans`}>
      <body className='w-full flex-col items-center'>
        <Link href={`/`} className='block w-full p-2 text-center text-3xl'>
          🍯 | Honeypot Blog | 🍯
        </Link>

        {children}
        <footer>
          &copy; 2023{' '}
          <a href='https://www.github.com/doctype-melvin' target='_blank'>
            doctype-Melvin
          </a>
        </footer>
      </body>
    </html>
  );
}
