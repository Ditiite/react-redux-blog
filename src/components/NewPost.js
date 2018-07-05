import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { addPost } from '../posts';
import { connect } from 'react-redux';


export class NewPost extends Component {

    // handleChange = (event) => {
    //     const target = event.target;
    //     const name = target.name;
    //     const value = target.value;

    //     this.setState({
    //         [name]: value
    //     })
    // }

    // save = (event) => {
    //     event.preventDefault();
    //     addPost(this.props.title, this.props.text, this.props.category);
    //     this.props.history.push('/');
    // }

    // cancel = () => {
    //     this.setState({
    //         title: '',
    //         category: '',
    //         text: ''
    //     });
    //     this.props.history.push('/');
    // }

    render() {
        return (
            <form id="add-post">
                <label>Title:
                    <input type="text" name="title" />
                </label>
                <br />
                <label>Category:
                    <input type="text" name="category" />
                </label>
                <br />
                <label>Write New Post
                    <textarea name="text" />
                </label>
                <br />
                <button type="submit">Save</button>
                <button type="reset">Cancel</button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(NewPost);
