import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';
import store from './redux/store';

function App() {
    return (
        <Provider store={store}>
            <div>
                <Switch>
                    <Route path='/' component={Home} />

                </Switch>
            </div>
        </Provider>
    )
}

export default App
