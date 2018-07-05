import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PostDetails extends Component {
    handleClick = () => {
        this.props.store.dispatch({
            type: 'DELETE_POST'
        });
    }

    render() {
        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button
                    onClick={this.handleClick}>
                    Delete Post
                </button>
                <div>
                    <p>{this.props.post.title}</p>
                    <p>{this.props.post.category}</p>
                    <p>{this.props.post.text} </p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.reducerActivePost
    }
}

export default connect(mapStateToProps)(PostDetails);
