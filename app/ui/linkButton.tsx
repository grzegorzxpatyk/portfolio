import Link from 'next/link';
import Button from './button';

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
            <Button className={className} {...props}>
                {children}
            </Button>
        </Link>
    );
}
