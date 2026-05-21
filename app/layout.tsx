import './globals.css';
import type { Metadata } from 'next';
import { Syne, Space_Grotesk } from 'next/font/google';
import Cursor from '@/components/Cursor';
import SmoothScroll from '@/components/SmoothScroll';

const syne = Syne({ subsets: ['latin'], variable: '--serif' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--sans' });

export const metadata: Metadata = {
  title: 'Akshita Garg, Marketing Strategist',
  description: 'Portfolio of Akshita Garg, Marketing Strategist and Brand Builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable}`}>
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
