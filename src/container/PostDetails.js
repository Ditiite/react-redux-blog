import React, { Component } from 'react';
//import PropTypes from 'prop-types';
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
        console.log('Type of ingredients', typeof this.props.post.ingredients);
        console.log('Ingredients', this.props.post.ingredients);
        let ingredients = this.props.post.ingredients;

        console.log(ingredients);
        return (
            <div>
                <Link to="/">Back to Recipes</Link>
                <button
                    onClick={this.handleClick}>
                    Delete Recipe
                </button>
                <div>
                    <p>{this.props.post.title}</p>
                    <p>{this.props.post.category}</p>
                    <p>{this.props.post.text} </p>
                    {
                        ingredients.map(item => {
                            return (<ul>
                                <li>{item.amount} - {item.ingredient}</li>
                            </ul>)
                        })
                    }
                   
                </div>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
