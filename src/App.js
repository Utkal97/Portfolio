import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Main from './Components/MainComponent';

function App() {
    return (
        <BrowserRouter>
            <div className="App container-fluid">
                <Main />
            </div>
        </BrowserRouter>
    );
}

export default App;
