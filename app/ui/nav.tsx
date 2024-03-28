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
        <nav className='flex flex-row items-center justify-start gap-2 mb-12 w-full'>
            {links.map((link) => (
                <Link
                    href={link.href}
                    key={link.name}
                    className={`px-2 py-0 lowercase text-lg transition-colors border-zinc-700 hover:text-zinc-100 rounded ${
                        pathname === link.href
                            ? 'bg-zinc-900 border text-zinc-100'
                            : 'bg-transparent border-none text-zinc-300'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
