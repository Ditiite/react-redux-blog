import React, { Component } from 'react';

class AddIngredient extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="add-new-ingredient">
                    <label>Amount</label>
                    <input type="text" name="amount" onChange={this.props.handleChange} />

                    <label>Ingredient</label>
                    <input type="text" name="ingredient" onChange={this.props.handleChange} />
                </div>
                <button>Add ingredient</button>
            </div >
        );
    }
}
export default AddIngredient;