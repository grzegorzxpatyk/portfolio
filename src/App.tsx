import React, { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { darkTheme, globalStyles, styled } from './styles/stitches';
import { Separator } from './components/Separator';
import {
    Cross1Icon,
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    Half2Icon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const FlexContainer = styled('div', {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'row',
});

const InlineFlexContainer = styled('span', {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
});

const Logo = styled('h1', {
    fontFamily: '"JetBrains Mono", monospace',
    fontSize: 'max(2rem, 5vmin)',
    margin: '1vmin',
    width: '16vw',
    minWidth: 'fit-content',
    display: 'flex',
    justifyContent: 'space-around',
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
                <Logo>
                    greg <Cross1Icon style={{ margin: '0 .5rem' }} /> patyk
                </Logo>
                <Navbar>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </Navbar>
                <Button onClick={switchTheme} css={{ padding: '.6rem' }}>
                    <Half2Icon />
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
                        <InlineFlexContainer>
                            <GitHubLogoIcon />{' '}
                            <span style={{ marginLeft: '.5rem' }}>Github</span>
                        </InlineFlexContainer>
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        <InlineFlexContainer>
                            <LinkedInLogoIcon />
                            <span style={{ marginLeft: '.5rem' }}>
                                LinkedIN
                            </span>
                        </InlineFlexContainer>
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        <InlineFlexContainer>
                            <EnvelopeClosedIcon />{' '}
                            <span style={{ marginLeft: '.5rem' }}>Contact</span>
                        </InlineFlexContainer>
                    </FlexContainer>
                </section>
            </main>
        </div>
    );
}

export default App;
