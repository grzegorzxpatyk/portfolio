'use client';

import Image from 'next/image';
import Portrait from '../lib/avatar.png';
import { useRef } from 'react';

export default function Avatar() {
    const avatarRef = useRef<HTMLImageElement | null>(null);
    function handleMouseMove(e: React.MouseEvent<HTMLImageElement>) {
        if (!avatarRef.current) return;

        const height = avatarRef.current.height;
        const width = avatarRef.current.width;
        const avatarRect = avatarRef.current.getBoundingClientRect();
        const xVal = e.clientX - avatarRect.x;
        const yVal = e.clientY - avatarRect.y;

        const yRotation = 20 * ((xVal - width / 2) / width);

        const xRotation = -20 * ((yVal - height / 2) / height);

        const cssString =
            'perspective(500px) scale(1.1) rotateX(' +
            xRotation +
            'deg) rotateY(' +
            yRotation +
            'deg)';

        avatarRef.current.style.transform = cssString;
    }

    function handleMouseOut(e: React.MouseEvent<HTMLImageElement>) {
        if (!avatarRef.current) return;
        avatarRef.current.style.transform =
            'perspective(500px) scale(1) rotateX(0) rotateY(0)';
    }

    return (
        <Image
            ref={avatarRef}
            src={Portrait}
            width={200}
            height={200}
            alt='My portrait.'
            className='hidden sm:block rounded-lg sm:row-span-2 transition-transform ease-linear'
            placeholder='blur'
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        />
    );
}
