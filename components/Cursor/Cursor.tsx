'use client';

import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Cursor({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const size = 80;
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    if (mouse.isTouch) {
        return;
    }

    let x = -size;
    let y = -size;

    if (mouse.clientX !== null) {
        x = mouse.clientX;
    }

    if (mouse.clientY !== null) {
        y = mouse.clientY;
    }

    const variants = {
        active: {
            opacity: 1,
            x: x - size / 2,
            y: y - size / 2,
            width: size,
            height: size,
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        <div
            className='fixed inset-0 h-dvh w-dvw select-none overflow-auto bg-transparent'
            ref={ref}
        >
            {children}
            <motion.div
                className='pointer-events-none fixed left-0 top-0 flex animate-pulse select-none items-center justify-center rounded-full border border-zinc-900/50 dark:border-zinc-200/50'
                variants={variants}
                animate='active'
                initial='hidden'
                exit='hidden'
                transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                    mass: 0.6,
                }}
            ></motion.div>
        </div>
    );
}
