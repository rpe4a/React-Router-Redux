import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router';
import Routes from './Utils/routes'
import NotFound from './components/NotFound';

render(
    <Router history={browserHistory}>
        {Routes}
        <Route path='*' component={NotFound}></Route>       
    </Router>,
    document.getElementById('root')
)