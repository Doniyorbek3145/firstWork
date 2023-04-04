import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Home from './Pages/Home/Home';
import InfoPage from './Pages/InfoPage/infoPage';
import OneCategory from './Pages/oneCategory/oneCategory';


function App() {

    return (
        
            <div>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/categories' exact component={CategoryPage}/>
                    <Route path={`/categories/:name`} exact component={OneCategory}/>
                    <Route path='/home/:name' component={InfoPage}/>
                    
                </Switch>
            </div>
    )
}

export default App
