'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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
                    className='relative p-0 text-lg lowercase transition-all hover:text-black dark:hover:text-zinc-100'
                >
                    {link.name}
                    {pathname === link.href && (
                        <motion.span
                            layoutId='navlink-underline'
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                            }}
                            className='absolute left-0 top-full block h-[2px] w-full bg-zinc-800 dark:bg-zinc-500'
                        />
                    )}
                </Link>
            ))}
        </nav>
    );
}
