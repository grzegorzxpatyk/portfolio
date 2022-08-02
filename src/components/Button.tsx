import { styled } from '../styles/stitches';

const Button = styled('button', {
    all: 'unset',
    padding: '.6rem 1rem',
    margin: '.4rem',
    borderRadius: '.6rem',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'transform .08s ease-in-out',
    '&:active': {
        transform: 'translate(0, 2px) scale(0.95)',
    },
    '&:focus': {
        outline: '3px solid #aaaaffaa',
        boxShadow: '0 0 15px #aaaaffaa',
    },

    variants: {
        variant: {
            default: {
                background: '$slate5',
                color: '$slate12',
                '&:hover': {
                    background: '$slate7',
                },
            },
            outlined: {
                backgroundColor: '#ffffff00',
                backdropFilter: 'blur(1px)',
                transition:
                    'transform .08s ease-in-out, backdrop-filter .15s ease-in-out, background-color 0.3s ease-in-out',
                color: '$slate12',
                border: '1px solid $slate11',
                '&:hover': {
                    backdropFilter: 'blur(2px)',
                    backgroundColor: '$slateA6',
                },
            },
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export default Button;
