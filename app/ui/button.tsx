type ButtonProps = Omit<React.JSX.IntrinsicElements['button'], 'type'> & {
    className?: string;
    children: React.ReactNode;
};

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <button
            type='button'
            className={
                'inline-flex justify-center items-center py-1 px-2 my-2 text-base font-medium text-zinc-900 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-900 shadow hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-400 dark:border-zinc-700 rounded active:scale-95 transition-transform' +
                className
            }
            {...props}
        >
            {children}
        </button>
    );
}
