import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class PostDetails extends Component {
    render() {
        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button>Delete Post</button>
                {this.props.post === null ? <p>Sorry can't find selected post!</p> :
                    <div>
                        <p>{this.props.post.title}</p>
                        <p>{this.props.post.category}</p>
                        <p>{this.props.post.text} </p>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.selectedPost
    }
}

export default connect(mapStateToProps)(PostDetails);
