import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectPost, deletePost, increment } from '../actions/indexAction';

class PostDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         likes: 0
    //     }
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id, 10);
        this.props.selectPost(this.props.posts.find((post) => post.id === id) || {});
    }

    increment = () => {
        this.props.increment({ likes: this.props.post.likes, count: 100 });
    }

    render() {

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
                    <p>{this.props.post.text}</p>
                    {/* {
                        this.props.post.ingredients.map(item => {
                            return (<ul>
                                <li>{item.amount} - {item.ingredient}</li>
                            </ul>)
                        })
                    } */}

                </div>
                <div className="control-buttons">
                    <button onClick={this.increment} className="likes">&hearts; {this.props.post.likes}</button>
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
        post: state.activePost,
        likes: state.likes
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
        increment: (likes) => {
            dispatch(increment(likes));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
