import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import Navigation from '@/components/Nav/Nav';
import Cursor from '@/components/Cursor/Cursor';

export const metadata: Metadata = {
    title: {
        default: 'Greg Patyk',
        template: '%s | Greg Patyk',
    },
    description: 'Portfolio of my web development projects and photography.',
    authors: { name: 'Greg Patyk', url: 'https://gpatyk.dev' },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='cursor-auto scrollbar-stable'>
            <body
                className={`${GeistSans.className} bg-zinc-100 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-300`}
            >
                <div className='mx-auto flex h-fit min-h-dvh min-w-0 max-w-2xl flex-col items-center justify-start p-8 pb-20'>
                    <Navigation />
                    {children}
                </div>
                <Cursor />
            </body>
        </html>
    );
}
