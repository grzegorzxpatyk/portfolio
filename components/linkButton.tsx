import Link, { LinkProps } from 'next/link';
import Button from '@/components/button';
import { ButtonProps } from 'react-aria-components';

type LinkButtonProps = ButtonProps &
    LinkProps &
    React.AllHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({
    href,
    className = '',
    children,
    target = '_self',
    ...props
}: LinkButtonProps) {
    return (
        <Link href={href} target={target} passHref>
            <Button className={className} {...props}>
                {children}
            </Button>
        </Link>
    );
}
