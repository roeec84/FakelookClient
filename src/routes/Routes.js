import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import HomePage from '../Pages/Home/HomePage';

const Routes = () => {
    return ( 
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>
     );
}
 
export default Routes;