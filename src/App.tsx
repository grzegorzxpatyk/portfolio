import React, { useEffect, useLayoutEffect, useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { darkTheme, globalStyles, styled } from './styles/stitches';
import { Separator } from './components/Separator';
import FlexContainer from './components/FlexContainer';
import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    Half2Icon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';
import NameHeading from './components/NameHeading';
import BioHeading from './components/BioHeading';

function App() {
    globalStyles();
    const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false);

    function switchTheme() {
        setIsUsingDarkTheme(!isUsingDarkTheme);
    }

    const darkModePreference = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches;

    useLayoutEffect(() => {
        if (darkModePreference) {
            setIsUsingDarkTheme(true);
        }
    }, []);

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                setIsUsingDarkTheme(event.matches);
            });
    }, []);

    return (
        <div id="App" className={isUsingDarkTheme ? darkTheme : ''}>
            <Header>
                <FlexContainer
                    css={{ width: '50%' }}
                    justifyContent="between"
                    alignItems="center"
                    flexDirection="row"
                >
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
                </FlexContainer>
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
                    <NameHeading>Grzegorz Patyk</NameHeading>
                    <BioHeading>
                        I'm Greg - software engineer based in Cracow. I am
                        interested in UI development, design and 3D modeling.
                    </BioHeading>
                    <p style={{ margin: '1rem 0', lineHeight: 1.5 }}>
                        I am currently working at TTMS, providing clients with
                        best frontend solutions, but I am open for a freelance
                        work. Need a hand? Just hit me up 😉
                    </p>
                    <Separator css={{ margin: '15px 0' }} />
                    <FlexContainer
                        css={{ height: '20px' }}
                        justifyContent="start"
                    >
                        <a
                            href={process.env.REACT_APP_GITHUB_LINK}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FlexContainer>
                                <GitHubLogoIcon />
                                <span style={{ marginLeft: '.5rem' }}>
                                    Github
                                </span>
                            </FlexContainer>
                        </a>
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        <FlexContainer>
                            <LinkedInLogoIcon />
                            <span style={{ marginLeft: '.5rem' }}>
                                LinkedIN
                            </span>
                        </FlexContainer>
                        <Separator
                            decorative
                            orientation="vertical"
                            css={{ margin: '0 15px' }}
                        />
                        <FlexContainer>
                            <EnvelopeClosedIcon />
                            <span style={{ marginLeft: '.5rem' }}>Contact</span>
                        </FlexContainer>
                    </FlexContainer>
                </section>
            </main>
        </div>
    );
}

export default App;
