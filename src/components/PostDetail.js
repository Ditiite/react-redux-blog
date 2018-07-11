import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PostDetail extends Component {
   
    render() {
        return(
            <div>
                <Link to="/">Back to Posts</Link>
                i am post
            </div>
        );
    }
}