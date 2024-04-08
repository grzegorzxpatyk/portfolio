'use client';

import Image from 'next/image';
import Portrait from '../lib/avatar.png';
import { useEffect, useRef } from 'react';
import colors from 'tailwindcss/colors';

export default function Avatar() {
    const avatarRef = useRef<HTMLImageElement | null>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLImageElement>) {
        if (!avatarRef.current) return;

        const avatarRect = avatarRef.current.getBoundingClientRect();
        const xVal = e.clientX - avatarRect.x;
        const yVal = e.clientY - avatarRect.y;

        setAvatarTrasform({ xVal, yVal });
    }

    function setAvatarTrasform({ xVal, yVal }: { [key: string]: number }) {
        if (!avatarRef.current) return;

        const height = avatarRef.current.height;
        const width = avatarRef.current.width;

        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);

        const cssString =
            'perspective(500px) scale(1.1) rotateX(' +
            xRotation +
            'deg) rotateY(' +
            yRotation +
            'deg)';

        avatarRef.current.style.transform = cssString;

        const shadowX = (-xVal + 100) / 6;
        const shadowY = (-yVal + 100) / 6;

        avatarRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 0px ${
            colors.blue[500]
        }66, 
        ${shadowX * 2}px ${shadowY * 2}px 0px ${colors.red[500]}33`;
    }

    function handleMouseOut(e: React.MouseEvent<HTMLImageElement>) {
        resetAvatarTransform();
    }

    function resetAvatarTransform() {
        if (!avatarRef.current) return;
        avatarRef.current.style.transform =
            'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        avatarRef.current.style.boxShadow = `none`;
    }

    useEffect(() => {
        setTimeout(() => {}, 1000);
        let counter = 0;
        const avatarAnimation = setInterval(() => {
            if (counter >= 3) {
                resetAvatarTransform();
                clearInterval(avatarAnimation);
            } else {
                switch (counter) {
                    case 0:
                        setAvatarTrasform({ xVal: 25, yVal: 18 });
                        break;
                    case 1:
                        setAvatarTrasform({ xVal: 180, yVal: 15 });
                        break;
                    case 2:
                        setAvatarTrasform({ xVal: 23, yVal: 191 });
                        break;
                    default:
                        resetAvatarTransform();
                        break;
                }
                counter++;
            }
        }, 1500);
        return () => {
            clearInterval(avatarAnimation);
        };
    }, []);

    return (
        <Image
            ref={avatarRef}
            src={Portrait}
            width={200}
            height={200}
            alt='My portrait.'
            className='sm:row-span-2 rounded-lg transition-all duration-500 ease-in-out hover:transition-transform hover:duration-100 hover:ease-linear'
            placeholder='blur'
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
        />
    );
}
