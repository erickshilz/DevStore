import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | DevStore',
    default: 'DevStore',
  },

  description: 'Criado no curso de Next JS da RocketSeat.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={inter.variable} lang='pt-br'>
      <body className='bg-zinc-950 text-zinc-50 antialiased'>{children}</body>
    </html>
  );
}
