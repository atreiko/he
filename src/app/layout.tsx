import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import Providers from '@/components/providers/Providers';
import Header from '@/components/header/Header';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hookah Expenses',
  description: 'Get a preliminary cost calculation of your hookah.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
