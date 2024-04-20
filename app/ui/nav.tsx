'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Photography', href: '/photography' },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className='mb-12 flex w-full flex-row items-center justify-start gap-4'>
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.name}
                    className={`box-content border-b-2 border-b-zinc-500 p-0 text-lg lowercase transition-all hover:border-opacity-50 hover:text-black dark:hover:text-zinc-100 ${
                        pathname === link.href
                            ? 'border-opacity-100'
                            : 'border-opacity-0'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
