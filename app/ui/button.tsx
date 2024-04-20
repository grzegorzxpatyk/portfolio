import clsx from 'clsx';

type ButtonProps = React.JSX.IntrinsicElements['button'] & {
    className?: string;
    children: React.ReactNode;
};

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            className={clsx(
                'inline-flex items-center justify-center rounded border border-zinc-400 bg-zinc-50 px-2 py-1 text-base font-medium text-zinc-900 shadow transition-transform hover:bg-zinc-200 active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
