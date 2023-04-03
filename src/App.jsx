import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage/CategoryPage';
import Home from './Pages/Home/Home';
import OneCategory from './Pages/oneCategory/oneCategory';


function App() {

    const CategoryUrl = useSelector(state=>state.urlName)

    return (
        
            <div>
                <Switch>
                    <Route path='/' component={Home} exact/>
                    <Route path='/categories' exact component={CategoryPage}/>
                    <Route path={`/categories/${CategoryUrl}`} component={OneCategory}/>
                    
                </Switch>
            </div>
    )
}

export default App
