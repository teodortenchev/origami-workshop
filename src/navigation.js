import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import PostPage from './pages/post';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Error404 from './pages/error404';
import ProfilePage from './pages/profile';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/post" component={PostPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;