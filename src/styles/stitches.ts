import {
    blueA,
    blueDarkA,
    cyanA,
    cyanDarkA,
    indigoA,
    indigoDarkA,
    skyA,
    skyDarkA,
    slate,
    slateA,
    slateDark,
    slateDarkA,
} from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';

export const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...slate,
            ...slateA,
            ...indigoA,
            ...blueA,
            ...skyA,
            ...cyanA,
        },
    },
});

export const darkTheme = createTheme('dark-theme', {
    colors: {
        ...slateDark,
        ...slateDarkA,
        ...indigoDarkA,
        ...blueDarkA,
        ...skyDarkA,
        ...cyanDarkA,
    },
});

export const globalStyles = globalCss({
    '@import':
        "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap&family=JetBrains+Mono:wght@300;400;500;600;700;800&display=swap'')",
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    '#App': {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        background: 'linear-gradient(45deg, $indigoA8 0%, $cyanA8 100%)',
        color: '$slate12',
        fontFamily: 'Inter, sans-serif',
        [`&.${darkTheme}`]: {
            background: '$slate1',
        },
    },
});
