import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import './App.css';
import Main from './Components/MainComponent';

function App() {
    return (
        <HashRouter basename='/'>
            <div className="App container-fluid">
                <Main />
            </div>
        </HashRouter>
    );
}

export default App;
