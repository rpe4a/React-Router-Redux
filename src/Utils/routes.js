import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from '../containers/App';
import Home from '../components/Home';
import Admin from '../components/Admin';
import Genre from '../components/Genre';


export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path='admin' component={Admin}></Route>
        <Route path='genre' component={Genre}></Route>
        <Route path='genre' component={Genre}></Route>
    </Route>
)
