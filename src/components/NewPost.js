import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { addPost } from '../posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/indexAction';
//import AddIngredient from './addIngredient';
//import ImageInput from './ImageInput';


export class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            text: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log([event.target.name], event.target.value);
    }

    /*save = (event) => {
        event.preventDefault();
        // TODO: check if state has correct title, category and text

        //const minInputLength = 1;

        // if (this.state.title.length < minInputLength) {
        //     alert(`Title must be a least  ${minInputLength} characters.`)
        // } else if (this.state.category.length < minInputLength) {
        //     alert(`Category must be a least  ${minInputLength} characters.`)
        // } else if (this.state.text.length < minInputLength) {
        //     alert(`Text must be a least 10 characters.`)
        // } else {
        this.props.addPost({
            [event.target.name]: event.target.value
        });
        this.props.history.push('/');
        //}
    }*/
    save = (event) => {
        event.preventDefault();
        this.props.addPost({ title: this.state.title, text: this.state.text, category: this.state.category });
        this.props.history.push('/');
    }

    cancel = () => {
        this.setState({
            title: '',
            category: '',
            text: ''
        });

        this.props.history.push('/');
    }

    render() {
        return (

            <form id="add-post" onSubmit={this.save}>
                <label className="add-post-title">Title:</label>
                <input className="add-post-title-input"
                    type="text" name="title"
                    onChange={this.handleChange}
                    value={this.state.value} />

                <label className="add-post-category">Category:</label>
                <input className="add-post-category-input"
                    type="text"
                    name="category"
                    onChange={this.handleChange}
                    value={this.state.value} />

                <div className="write-new-post">
                    <label>Add description</label>
                    <br />
                    <textarea className="write-new-post-textarea"
                        name="text"
                        onChange={this.handleChange}
                        value={this.state.value} />
                </div>

                <button className="btn-save btn">Save</button>
                <button onClick={this.cancel} className="btn-cancel btn" type="reset">Cancel</button>
            </form>
        );
    }
}

NewPost.propTypes = {
    addPost: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
    return {
        addPost: (post) => {
            dispatch(addPost(post));
        }
    }
};

export default connect(null, mapDispatchToProps)(NewPost);