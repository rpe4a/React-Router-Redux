import React, { Component } from 'react'
import { Link } from 'react-router';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className='container'>
            <h1>App</h1>
            <ul>
                <li><Link to='/22'>Home</Link></li>
                <li><Link to='/admin'>Admin</Link></li>
                <li><Link to='/genre'>Genre</Link></li>
            </ul>
            {this.props.children}
        </div>
    }
}
