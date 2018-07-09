import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { addPost } from '../posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../actions/indexAction';

export class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            text: '',
            ingredients: [
                {
                    amount: '',
                    ingredient: ''
                }
            ]
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleIngredients = (e) => {
        this.setState({
            amount: e.target.value,
            ingredient: e.target.value
        })
    }

    save = (event) => {
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
    }

    cancel = () => {
        this.setState({
            title: '',
            category: '',
            text: '',
            ingredients: [
                {
                    amount: '',
                    ingredient: ''
                }
            ]
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <form id="add-post" onSubmit={this.save}>
                <label className="add-post-title">Title:</label>
                <input className="add-post-title-input" type="text" name="title" onChange={this.handleChange} />

                <label className="add-post-category">Category:</label>
                <input className="add-post-category-input" type="text" name="category" onChange={this.handleChange} />

                <div className="write-new-post">
                    <label>Add description</label>
                    <br />
                    <textarea className="write-new-post-textarea" name="text" onChange={this.handleChange} />
                </div>
                <div className="add-new-ingredient">
                    <label>Amount</label>
                    <input type="text" name="amount" onChange={this.handleChange} />

                    <label>Ingredient</label>
                    <input type="text" name="ingredient" onChange={this.handleChange} />
                </div>
                <p>{this.state.amount} - {this.state.ingredient}</p>
                <button onClick={this.handleIngredients}>Add mores ingredients</button>

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