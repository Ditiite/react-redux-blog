import React, { Component } from 'react';

class AddIngredient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: []
        }
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log('Event', [event.target.name], 'value', event.target.value);
    }

    handleSave = (event) => {
        event.preventDefault();

        this.setState(previousState => ({
            ingredients: [...previousState.ingredients, event.target.value]
        }));
    }

    render() {
        console.log(this.state);

        return (
            <React.Fragment>
                {
                    this.state.ingredients.map(item => {
                        return <p>{item.amount} - {item.ingredient}</p>
                    })
                }

                <form onSubmit={this.handleSave}>

                    <input
                        name="amount"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <input
                        name="ingredient"
                        value={this.state.value}
                        onChange={this.handleChange} />
                    <button>Add ingredient</button>
                </form >
            </React.Fragment>
        );
    }
}
export default AddIngredient;