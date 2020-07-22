import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/home';
import PostPage from './pages/post';
import RegisterPage from './pages/register';
import LoginPage from './pages/login';
import Error404 from './pages/error404';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/post" component={PostPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route component={Error404} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;