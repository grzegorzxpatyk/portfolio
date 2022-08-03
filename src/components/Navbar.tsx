import { styled } from '../styles/stitches';

const Navbar = styled('nav', {
    '& ul': {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& li': {
            margin: '0 1rem',
        },
    },
});

export default Navbar;
