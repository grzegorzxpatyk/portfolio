import React, { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { darkTheme, globalStyles, styled } from './styles/stitches';
import { Separator } from './components/Separator';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

const FlexContainer = styled('div', {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
});

function App() {
    globalStyles();
    const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false);

    function switchTheme() {
        setIsUsingDarkTheme(!isUsingDarkTheme);
    }

    return (
        <div id="App" className={isUsingDarkTheme ? darkTheme : ''}>
            <Header>
                <h1>portfolio</h1>
                <Navbar>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </Navbar>
                <Button onClick={switchTheme} css={{ padding: '.6rem' }}>
                    {isUsingDarkTheme ? <SunIcon /> : <MoonIcon />}
                </Button>
            </Header>
            <main
                style={{
                    margin: '4rem auto',
                    width: '50vw',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <section>
                    <h2 style={{ margin: '.5rem 0' }}>
                        Welcome to my portfolio!
                    </h2>
                    <p>
                        I'm Greg - a software engineer from Poland. Nice to meet
                        you!
                    </p>
                    <Separator css={{ margin: '15px 0' }} />
                    <FlexContainer css={{ height: '20px' }}>
                        Github{' '}
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        LinkedIN
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        Contact
                    </FlexContainer>
                </section>
            </main>
        </div>
    );
}

export default App;
