import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPost, deletePost, increment } from '../actions/indexAction';
import cookies2 from '../images/cookies2.jpg';

class PostDetails extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        this.props.selectPost(this.props.posts.find((post) => post.id === id) || {});
    }

    handleClick = (event) => {
        this.props.increment(this.props.i);
    }

    render() {

        return (
            <div className="single-post">
                <Link to="/" className="btn-back">Back to Recipes</Link>
                <button className="btn-delete"
                    onClick={this.handleClick}>
                    Delete Recipe
                </button>
                <h1 className="post-title">{this.props.post.title}</h1>
                <div className="post-description">

                    <p className="category">Category: {this.props.post.category}</p>
                    <p className="posts-text">{this.props.post.text}</p>
                    <ul className="ingredients">
                        {
                            this.props.post.ingredients.map(item => {
                                return (<li>{item.amount} - {item.ingredient}</li>)
                            })
                        }
                    </ul>
                    <img className="single-recipe-avatar" src={cookies2} alt="" />

                </div>
                <button className="btn-likes"
                    onClick={this.handleClick}>
                    <span className="heart">&hearts;</span>{this.props.post.likes}
                </button>
            </div>
        );
    }
}

// PostDetails.propTypes = {
//     title: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//     ingredients: PropTypes.array.isRequired
// }

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        post: state.activePost
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectPost: (post) => {
            dispatch(selectPost(post));
        },
        deletePost: (postId) => {
            dispatch(deletePost(postId));
        },
        increment: index => {
            dispatch(increment(index))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
