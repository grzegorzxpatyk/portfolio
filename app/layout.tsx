import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navigation from './ui/nav';

export const metadata: Metadata = {
  title: {
    default: 'Greg Patyk',
    template: '%s | Greg Patyk',
  },
    description: 'Portfolio of my web development projects and photography.',
    authors: { name: 'Greg Patyk', url: 'https://gpatyk.dev'},
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className='cursor-crosshair scrollbar-stable'>
            <body
                className={`${GeistSans.className} mx-auto max-w-2xl bg-zinc-100 text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-300`}
            >
                <div className='mt-2 flex h-fit min-w-0 flex-col items-center justify-start p-8 lg:mt-8'>
                    <Navigation />
                    {children}
                </div>
            </body>
        </html>
    );
}
