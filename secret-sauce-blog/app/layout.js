import './globals.css';
import localFont from '@next/font/local';

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
  title: 'Secret Sauce Blog',
  description: 'Consuming API for the fun of it',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${roboto.variable} font-sans`}>
      <body>
        <h1 className='text-center text-3xl'>🍯 | Honeypot Blog | 🍯</h1>
        <p>
          Welcome to the Honeypot Blog, where sweetness awaits at every turn!
          Dive into our hive of articles, written with love and buzzing with
          creativity. And the best part? You&apos;re not alone in this
          indulgence. Share the sweetness with your friends by forwarding your
          favorite posts and spreading the joy of discovery. The adventure
          awaits! 🍯📚🐝
        </p>
        {children}
      </body>
    </html>
  );
}
