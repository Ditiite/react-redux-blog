import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAll } from '../posts';

export class ListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        this.setState({
            posts: getAll()
        });
    }
 
    render() {
        return(
            <section className="main-page">
                <Link to="/newpost" className="add-btn">
                    Add Post
                </Link>
                <div className="main-page-blogs">
                {
                    this.state.posts.map((post) => {
                        return (
                            <div key={post.id} id={'post-' + post.id} className="main-page-blogs-blog">
                                <Link to={`/posts/${post.id}`}>
                                    <h2> {post.title} </h2>
                                    <h2> {post.category} </h2>
                                </Link>
                            </div>
                        );
                    })
                }
                </div>
            </section>
        );
    }
}