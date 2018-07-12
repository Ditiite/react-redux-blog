import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//When we pass am action it is not enough just to import it, we need also to add it in down create function
import { selectPost } from '../actions/indexAction';
import { bindActionCreators } from 'redux';
//import { initialState } from '../reducers/reducer-posts';
import cook from '../images/cook.png';
import cookies2 from '../images/cookies2.jpg';

class ListPage extends Component {

    handleClick = (event) => {
        this.props.increment(this.props.likes);
    }
    render() {
        // this.posts = [];
        console.log(this.props.posts);
        return (
            <section className="list-page">
                <h1 className="main-title">My favorite recipes</h1>
                <div className="add-btn-section">
                    <Link to="/newpost" className="add-btn">
                        Add Recipe
                    </Link>
                </div>

                <div className="list-page-blogs">
                    <img src={cook} alt="Cook" className="list-page-cook" />
                    {
                        this.props.posts.map((post, i) => {
                            return (
                                <div
                                    likes={i}
                                    key={post.id}
                                    id={'post-' + post.id}
                                    onClick={() => this.props.selectPost(post)}>
                                    <Link className="posts-link" to={`/posts/${post.id}`}>
                                        <h2> {post.title} </h2>
                                        <h2> {post.category} </h2>
                                        <img className="recipe-avatar" src={cookies2} alt="" />
                                    </Link>
                                    <button className="btn-likes"
                                        onClick={this.handleClick}>
                                        &hearts;{post.likes}
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

// Takes piece of application store your application state the main data and it passes it into your component as property
/* MapsStateToProps takes a piece of state which is part of store and it sends it into your
* component as props
*/
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const matchDispatchToProps = dispatch => {
    return bindActionCreators({ selectPost: selectPost }, dispatch)
};

//In order to use mapStateToProps we need to call-> connect
// And here we also exporting the component

export default connect(mapStateToProps, matchDispatchToProps)(ListPage);


