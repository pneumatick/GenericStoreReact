import React from 'react';

export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0,
            price: 0
        }
    }

    render() {
        return (
            <div>
                <h3>Create</h3>
                <label>Product</label>
                <input id="product" name="product" type="text"/>
                <label>Quantity</label>
                <input id="quantity" name="quantity" type="number"/>
                <label>Price</label>
                <input id="price" name="price" type="text" step="any"/>
                <button>Create</button>
            </div>
        );
    }
}