import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPost, deletePost } from '../actions/indexAction';


class PostDetails extends Component {
    handleClick = () => {
       this.props.deletePost(this.props.post.id);
    this.props.history.push('/');
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        this.props.selectPost(this.props.posts.find((post) => post.id === id) || {});
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        post: state.activePost
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        selectPost: (post) => {
            dispatch(selectPost(post));
        },
        deletePost: (postId) => {
            dispatch(deletePost(postId));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
