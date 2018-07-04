import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost, deletePost } from '../posts';

export class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {}
        }
    
    }

    componentDidMount() {
        const postId = parseInt(this.props.match.params.id, 10);
        const post = getPost(postId);

        this.setState( {
            post
        });
    }

    handleDelete = (e) => {
        const postId = parseInt(this.state.post.id, 10);
        deletePost(postId);
        this.props.history.push('/');
    }

    render() {
        return(
            <div>
                <Link to="/">Back to Posts</Link>
                <button onClick={this.handleDelete}>Delete Post</button>
                { this.state.post.title }
                <br />
                { this.state.post.category }
                <br />
                { this.state.post.text }
            </div>
        );
    }
}