import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../actions/actionCreators';

class ListPage extends Component {
 
    render() {
        console.log('From component', this.props.posts)
               
        return(
            <section className="list-page">
                <p>This is props{this.props.posts}</p>
                    {/* <Link to="/newpost" className="add-btn">
                        Add Post
                    </Link> */}
                
            </section>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        posts: state.posts
    }
};

const matchDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ListPage);