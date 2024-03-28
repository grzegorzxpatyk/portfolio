import Link from 'next/link';
import { ReactNode } from 'react';

export default function LinkButton({
    href,
    className,
    children,
}: {
    href: string;
    className?: string;
    children: ReactNode;
}) {
    return (
        <Link
            href={href}
            className={
                'py-1 px-2 my-2 text-base text-zinc-200 bg-zinc-900 border border-zinc-700 rounded inline-flex justify-center items-center' +
                (className ? ` ${className}` : '')
            }
        >
            {children}
        </Link>
    );
}
