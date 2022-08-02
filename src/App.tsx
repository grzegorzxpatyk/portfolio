import React, { useState } from 'react';
import Button from './components/Button';
import { darkTheme, globalStyles } from './styles/stitches';

function App() {
    globalStyles();
    const [isUsingDarkTheme, setIsUsingDarkTheme] = useState(false);

    function switchTheme() {
        setIsUsingDarkTheme(!isUsingDarkTheme);
    }

    return (
        <div id="App" className={isUsingDarkTheme ? darkTheme : ''}>
            <h1>portfolio</h1>
            <Button onClick={switchTheme}>
                Switch to {isUsingDarkTheme ? 'light' : 'dark'} theme
            </Button>
        </div>
    );
}

export default App;
