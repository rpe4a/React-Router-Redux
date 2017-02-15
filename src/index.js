import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router';
import Routes from './Utils/routes'

render(
    <Router history={browserHistory} routes={Routes}></Router>, document.getElementById('root')
)