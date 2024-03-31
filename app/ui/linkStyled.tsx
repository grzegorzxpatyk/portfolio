import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import Link, { LinkProps } from 'next/link';

export default function LinkStyled(
    props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
    return (
        <Link
            {...props}
            className={`group inline-flex justify-between items-center hover:text-zinc-600 dark:hover:text-zinc-100 ${props.className}`}
        >
            {props.children}
            {props.target === '_blank' && (
                <ArrowTopRightIcon className='ml-1 group-hover:translate-x-1 group-hover:rotate-45 transition-all' />
            )}
        </Link>
    );
}
