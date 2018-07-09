import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { addPost } from '../posts';
import { connect } from 'react-redux';
import { addPost } from '../actions/indexAction';


export class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            text: ''
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    save = (event) => {
        event.preventDefault();
        // TODO: check if state has correct title, category and text

        this.props.addPost({
            title: this.state.title,
            category: this.state.category,
            text: this.state.text
        });

        this.props.history.push('/');
    }

    cancel = () => {
        this.setState({
            title: '',
            category: '',
            text: ''
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <form id="add-post" onSubmit={this.save}>
                <label>Title:
                    <input type="text" name="title" onChange={this.handleChange} />
                </label>
                <br />
                <label>Category:
                    <input type="text" name="category" onChange={this.handleChange} />
                </label>
                <br />
                <label>Write New Post
                    <textarea name="text" onChange={this.handleChange} />
                </label>
                <br />
                <button type="submit">Save</button>
                <button type="reset">Cancel</button>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => {
            dispatch(addPost(post));
        }
    }
};


export default connect(null, mapDispatchToProps)(NewPost);
