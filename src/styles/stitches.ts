import {
    blueA,
    blueDarkA,
    cyanA,
    cyanDarkA,
    gray,
    grayDark,
    indigoA,
    indigoDarkA,
    slate,
    slateA,
    slateDark,
    slateDarkA,
    tealA,
    tealDarkA,
    violetA,
    violetDarkA,
} from '@radix-ui/colors';
import { createStitches, globalCss } from '@stitches/react';

export const { styled, createTheme } = createStitches({
    theme: {
        colors: {
            ...gray,
            ...slate,
            ...slateA,
            ...violetA,
            ...indigoA,
            ...blueA,
            ...cyanA,
            ...tealA,
        },
    },
});

export const darkTheme = createTheme('dark-theme', {
    colors: {
        ...grayDark,
        ...slateDark,
        ...slateDarkA,
        ...violetDarkA,
        ...indigoDarkA,
        ...blueDarkA,
        ...cyanDarkA,
        ...tealDarkA,
    },
});

export const globalStyles = globalCss({
    '@import':
        "url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap')",
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
    },
    '#App': {
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(45deg, $blueA9 0%, $violetA9 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '$slate12',
        fontFamily: 'Inter, sans-serif',
        [`&.${darkTheme}`]: {
            background: '$slate1',
        },
    },
});
