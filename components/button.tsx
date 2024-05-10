'use client';

import clsx from 'clsx';
import { Button as ReactAriaButton, ButtonProps } from 'react-aria-components';

export default function Button({ className, children, ...props }: ButtonProps) {
    return (
        <ReactAriaButton
            className={clsx(
                'inline-flex items-center justify-center rounded border border-zinc-400 bg-zinc-50 px-2 py-1 text-base font-medium text-zinc-900 shadow-lg shadow-zinc-600/20 transition-all hover:bg-zinc-200 hover:shadow-none active:scale-95 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800',
                className
            )}
            {...props}
        >
            {children}
        </ReactAriaButton>
    );
}
