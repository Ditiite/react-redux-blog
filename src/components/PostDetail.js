import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPost } from '../posts';

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


    render() {
        return(
            <div>
                { this.state.post.title }
                <br />
                { this.state.post.category }
                <br />
                { this.state.post.text }
            </div>
        );
    }
}