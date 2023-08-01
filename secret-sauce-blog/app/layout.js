import './globals.css';
import localFont from '@next/font/local';
import Link from 'next/link';
import LightMode from '@/components/LightMode';

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
  title: 'MarDeCor',
  description: 'Consuming API for the fun of it',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.variable} h-full font-sans`}>
      <body className='flex h-full w-full flex-col items-center'>
        <section
          aria-label='Home button and light mode toggle'
          className='flex w-11/12 items-center justify-between'
        >
          <Link href={`/`} className='block w-11/12 p-2 text-3xl'>
            MarDeCorBlog
          </Link>
          <LightMode />
        </section>

        {children}
        <footer className='w-full p-2 text-center'>
          &copy; 2023{' '}
          <a href='https://www.github.com/doctype-melvin' target='_blank'>
            doctype-Melvin
          </a>
        </footer>
      </body>
    </html>
  );
}
