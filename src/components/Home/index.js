import React, { Component } from 'react'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            genre: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.context.router.push(`/genre/${this.state.genre.toLowerCase()}`);
    }

    onChange(e) {
        this.setState({
            genre: e.target.value
        });
    }

    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>Раздел /</div>
                <form className='col-md-4' onSubmit={this.handleSubmit}>
                    <input type='text' placeholder='Имя жанра' onChange={this.onChange} />
                    <button type='submit'>Перейти</button>
                </form>
            </div>
        )
    }
}

Home.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default Home