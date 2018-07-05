import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
//When we pass am action it is not enough just to import it, we need also to add it in down create function
import { selectPost } from '../actions/indexAction';
import { bindActionCreators } from 'redux';

class ListPage extends Component {

    render() {
        return (
            <section className="list-page">
                <Link to="/newpost" className="add-btn">
                    Add Post
                </Link>
                <div className="list-page-blogs">
                    {
                        this.props.posts.map((post) => {
                            return (
                                <div
                                    key={post.id}
                                    id={'post-' + post.id}
                                    onClick={() => this.props.selectPost(post)}>

                                    <Link className="posts-link" to={`/posts/${post.id}`}>
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

// Takes piece of application store your application state the main data and it passes it into your component as property
/* MapsStateToProps takes a piece of state which is part of store and it sends it into your
* component as props
*/
const mapStateToProps = state => {
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


