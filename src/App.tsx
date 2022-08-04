import React, { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { darkTheme, globalStyles, styled } from './styles/stitches';
import { Separator } from './components/Separator';
import {
    EnvelopeClosedIcon,
    GitHubLogoIcon,
    Half2Icon,
    LinkedInLogoIcon,
} from '@radix-ui/react-icons';

const FlexContainer = styled('div', {
    display: 'flex',
    variants: {
        justifyContent: {
            start: {
                justifyContent: 'start',
            },
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'end',
            },
            between: {
                justifyContent: 'space-between',
            },
        },
        alignItems: {
            start: {
                alignItems: 'start',
            },
            center: {
                alignItems: 'center',
            },
            end: {
                alignItems: 'end',
            },
        },
        flexDirection: {
            row: {
                flexDirection: 'row',
            },
            column: {
                flexDirection: 'column',
            },
        },
    },

    defaultVariants: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
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

const NameHeading = styled('h1', {
    fontSize: '1.2rem',
    fontWeight: 500,
    lineHeight: 1.5,
    marginBottom: '1rem',
});

const ShortBioHeading = styled('h2', {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
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
                <FlexContainer
                    css={{ width: '50%' }}
                    justifyContent="between"
                    alignItems="center"
                    flexDirection="row"
                >
                    {/* <Logo>
                        greg <Cross1Icon style={{ margin: '0 .5rem' }} /> patyk
                    </Logo> */}
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
                    <ShortBioHeading>
                        I'm Greg - software engineer based in Cracow. I am
                        interested in UI development, design and 3D modeling.
                    </ShortBioHeading>
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
