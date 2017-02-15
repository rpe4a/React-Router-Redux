import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App/index';
import Home from '../components/Home/index';
import Admin from '../components/Admin/index';
import Genre from '../components/Genre/index';
import List from '../components/List/index';
import Release from '../components/Release/index';
import NotFound from '../components/NotFound/index';

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path='admin' component={Admin}></Route>
            <Route path='genre/:genre' component={Genre}>
                <Release path=':release' component={Release}></Release>
            </Route>
            <Route path='list' component={List}></Route>
        </Route>
        <Route path='*' component={NotFound}></Route>
    </div>


)
