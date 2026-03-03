import type { Metadata } from 'next';
import { Providers } from './providers';
import { Header } from '../components/Header';
import './global.css';

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}