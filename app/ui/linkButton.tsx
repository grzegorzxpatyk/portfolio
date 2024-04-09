import Link from 'next/link';
import { GeistMono } from 'geist/font/mono';

type LinkButtonProps = Omit<React.JSX.IntrinsicElements['button'], 'type'> & {
    href: string;
    className?: string;
    children: React.ReactNode;
};

export default function LinkButton({
    href,
    className = '',
    children,
    ...props
}: LinkButtonProps) {
    return (
        <Link href={href} passHref>
            <button
                type='button'
                className={`${GeistMono.className} py-1 px-2 my-2 text-base text-zinc-900 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900 border border-zinc-400 dark:border-zinc-700 rounded inline-flex justify-center items-center ${className}`}
                {...props}
            >
                {children}
            </button>
        </Link>
    );
}
