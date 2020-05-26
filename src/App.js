import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import Main from './Components/MainComponent';

function App() {
    return (
        <HashRouter hashType="noslash">
            <div className="App container-fluid">
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
