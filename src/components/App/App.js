import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from 'components';
import 'scss/app.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
