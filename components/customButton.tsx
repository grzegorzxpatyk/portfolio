'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import { AriaButtonProps } from '@react-aria/button';
import { PressEvent } from '@react-aria/interactions';
import { MouseEvent, useLayoutEffect, useState } from 'react';
import { Button } from 'react-aria-components';

export default function CustomButton({
    children,
    className,
    ...props
}: AriaButtonProps & { className?: string }) {
    function handlePress(event: PressEvent) {
        event.target;
    }

    return (
        <Button
            className={clsx(
                'relative overflow-hidden rounded border border-zinc-400 bg-zinc-50 px-2 py-1 text-base font-medium text-zinc-900 shadow-lg shadow-zinc-600/20 transition-all data-[hovered]:bg-zinc-200 data-[hovered]:shadow-none data-[pressed]:shadow-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:data-[hovered]:bg-zinc-800',
                className
            )}
            onPress={handlePress}
            {...props}
        >
            {children}
            <RippleContainer duration={1000} />
        </Button>
    );
}

export function Ripple({
    coords,
    duration,
}: {
    coords: { x: number; y: number; size: number };
    duration: number;
}) {
    return (
        <motion.span
            className='absolute rounded-full bg-yellow-400/50 content-[_]'
            style={{
                left: coords.x,
                top: coords.y,
                width: coords.size,
                height: coords.size,
            }}
            initial={{ scale: 0, opacity: 1 }}
            animate={{
                scale: 2,
                opacity: 0,
                transition: {
                    duration: duration / 1000,
                    ease: 'easeInOut',
                },
            }}
        ></motion.span>
    );
}

function RippleContainer({ duration }: { duration: number }) {
    const [rippleArray, setRippleArray] = useState<
        { x: number; y: number; size: number }[]
    >([]);

    useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
        setRippleArray([]);
    });

    const addRipple = (event: MouseEvent<HTMLDivElement>) => {
        const { width, height, left, top } =
            event.currentTarget.getBoundingClientRect();
        const size = width > height ? width : height;
        const x = event.pageX - left - size / 2;
        const y = event.pageY - top - size / 2;
        const newRipple = {
            x,
            y,
            size,
        };

        console.log({ ...newRipple }, event.clientX, event.clientY);

        setRippleArray([...rippleArray, newRipple]);
    };

    return (
        <div
            className='absolute bottom-0 left-0 right-0 top-0 h-full w-full'
            onClick={addRipple}
        >
            {rippleArray.length > 0 &&
                rippleArray.map((ripple, index) => (
                    <Ripple
                        key={`span-${index}`}
                        coords={ripple}
                        duration={duration}
                    />
                ))}
        </div>
    );
}

const useDebouncedRippleCleanUp = (
    rippleCount: number,
    duration: number,
    cleanUpFunction: () => void
) => {
    useLayoutEffect(() => {
        let bounce: ReturnType<typeof setTimeout> | null = null;
        if (rippleCount > 0) {
            clearTimeout(bounce!);

            bounce = setTimeout(() => {
                cleanUpFunction();
                clearTimeout(bounce!);
            }, duration * 4);
        }

        return () => clearTimeout(bounce!);
    }, [rippleCount, duration, cleanUpFunction]);
};
