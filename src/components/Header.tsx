import { styled } from '../styles/stitches';

const Header = styled('header', {
    position: 'fixed',
    top: '0px',
    width: '100%',
    height: 'max(8vh, 80px)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 5vw',
    backdropFilter: 'blur(2px)',
    background: '$slateA1',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
        background: '$slateA6',
        backdropFilter: 'blur(3px)',
    },
});

export default Header;
