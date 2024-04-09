import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navigation from './ui/nav';

export const metadata: Metadata = {
  title: {
    default: 'Grzegorz Patyk',
    template: '%s | Grzegorz Patyk',
  },
    description: 'Portfolio of my web development projects and photography.',
    authors: { name: 'Grzegorz Patyk', url: 'https://gpatyk.dev'},
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='cursor-crosshair scrollbar-stable'>
            <body className={`${GeistSans.className} antialiased mx-auto max-w-2xl text-zinc-900 bg-zinc-100 dark:text-zinc-300 dark:bg-zinc-900`}>
                <main className='flex h-fit flex-col items-center justify-start mt-2 lg:mt-8 p-8 min-w-0'>
                    <Navigation />
                    {children}
                </main>
            </body>
        </html>
    );
}
