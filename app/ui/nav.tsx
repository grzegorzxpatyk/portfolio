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
                    className={`px-2 py-0 lowercase text-base rounded ${
                        pathname === link.href
                            ? 'bg-zinc-800'
                            : 'bg-transparent'
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
