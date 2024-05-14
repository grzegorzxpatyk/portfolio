'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { useHover } from '@react-aria/interactions';
import { MouseEvent, useEffect, useRef, useState } from 'react';

export function CustomButton(
    props: AriaButtonProps & React.AllHTMLAttributes<HTMLButtonElement>
) {
    const ref = useRef(null);
    const { buttonProps, isPressed } = useButton(props, ref);
    const { isHovered, hoverProps } = useHover(props);
    const { children } = props;
    const className = props?.className;

    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            timeout = setTimeout(() => setIsRippling(false), 600);
        } else {
            setIsRippling(false);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [coords]);

    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const { left, top } = event.currentTarget.getBoundingClientRect();

        setCoords({
            x: event.clientX - left - 24,
            y: event.clientY - top - 24,
        });
    }

    return (
        <button
            ref={ref}
            {...buttonProps}
            {...hoverProps}
            className={clsx(
                'relative inline-flex w-fit select-none items-center justify-center overflow-hidden rounded border border-zinc-400 px-6 py-3 text-base font-medium text-zinc-900 shadow-lg shadow-zinc-600/20 transition-all dark:border-zinc-700 dark:text-zinc-200',

                (isPressed || (isPressed && isHovered)) &&
                    'scale-95 bg-zinc-300 shadow-none dark:bg-zinc-700',
                isHovered &&
                    !isPressed &&
                    'bg-zinc-200 shadow-none dark:bg-zinc-800',
                !isHovered && !isPressed && 'bg-zinc-50 dark:bg-zinc-900',
                className
            )}
            onClick={handleClick}
        >
            {children}
            {isRippling && <Ripple coords={coords} />}
        </button>
    );
}

export function Ripple({ coords }: { coords: { x: number; y: number } }) {
    return (
        <motion.span
            className='absolute h-12 w-12 rounded-full bg-red-700/50 content-[_]'
            style={{ left: coords.x, top: coords.y }}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
                scale: 5,
                opacity: 0,
                transition: {
                    duration: 0.6,
                    ease: 'backInOut',
                },
            }}
        ></motion.span>
    );
}

function RippleContainer() {}
