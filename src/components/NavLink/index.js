import React, { Component } from 'react'
import { Link } from 'react-router';

import './styles.scss'

class NavLink extends Component {
    render() {
        return <Link {...this.props} activeClassName='active-link' />
    }
}

export default NavLink