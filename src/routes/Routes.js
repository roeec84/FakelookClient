import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/atoms';
import Register from '../components/Register/Register';
import FriendsPage from '../Pages/Friends/FriendsPage';
import HomePage from '../Pages/Home/HomePage';
import PostPage from '../Pages/Post/PostPage';

const Routes = () => {
    const user = useRecoilValue(userAtom);

    return ( 
        <Switch>
            <Route path="/" exact>
                <HomePage/>
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/post" render={() => {
                if(!user) return <Redirect to="/"/>
                return <PostPage />
            }}/>
            <Route path="/friends" render={() => {
                if(!user) return <Redirect to="/"/>
                return <FriendsPage />
            }}/>
        </Switch>
     );
}
 
export default Routes;