import React, { Component } from 'react'
import NavLink from '../../components/NavLink';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><NavLink to='/' onlyActiveOnIndex={true} activeClassName='active-link'>Главная</NavLink></li>
                    <li><NavLink to='/admin' activeClassName='active-link'>Админка</NavLink></li>
                    <li><NavLink to='/list' activeClassName='active-link'>Список жанров</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )

    }
}
