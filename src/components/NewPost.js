import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addPost } from '../posts';

export class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            text: '',
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    save = (event) => {
        event.preventDefault();
        addPost(this.state.title, this.state.text, this.state.category);
        this.props.history.push('/');
    }
    
    cancel = (event) => {
        this.setState({
            title: '',
            category: '',
            text: ''
        });
        this.props.history.push('/');
    }

    render() {
        return(
            <form id="add-post" onSubmit={this.save} >
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                <input type="text" name="category" value={this.state.category} onChange={this.handleChange} />
                <textarea name="text" value={this.state.text} onChange={this.handleChange} />

                <button type="submit">Save</button>
                <button type="submit">Save</button>
                <button type="reset" onClick={this.cancel}>Cancel</button>
            </form>
        );
    }
}