import React from 'react';
import { Router, Route } from 'react-router-dom';
import CharacterList from '../pictures/CharacterList';
import history from '../history';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <div>
                    <Route path="/" exact component={CharacterList} />
                </div>
            </Router>
        </div>
    );
}

export default App;