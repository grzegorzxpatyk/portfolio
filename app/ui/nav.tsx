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
        <nav className='flex flex-row items-center justify-start gap-4 mb-12 w-full'>
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.name}
                    className={`box-content p-0 lowercase text-lg border-b-zinc-500 transition-all border-b-2 hover:text-black dark:hover:text-zinc-100 hover:border-opacity-50 ${
                        pathname === link.href ? 'border-opacity-100' : 'border-opacity-0'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
