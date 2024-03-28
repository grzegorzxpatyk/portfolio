import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navigation from './ui/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Grzegorz Patyk',
    template: '%s | Grzegorz Patyk',
  },
    description: 'Portfolio of my web development projects and photography.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${GeistSans.className} antialiased`}>
                <main className='flex min-h-screen flex-col items-center justify-start p-8 md:py-6 md:px-80'>
                    <Navigation />
                    {children}
                </main>
            </body>
        </html>
    );
}
