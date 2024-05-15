import Link from 'next/link';
import Button from './button';

type LinkButtonProps = Omit<React.JSX.IntrinsicElements['button'], 'type'> & {
    href: string;
    className?: string;
    children: React.ReactNode;
    target?: React.HTMLAttributeAnchorTarget;
};

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
