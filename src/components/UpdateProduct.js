import React from 'react';

export default class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h3>Update</h3>
                <label>Product</label>
                <input id="product" name="product" type="text"/>
                <label>Quantity</label>
                <input id="quantity" name="quantity" type="number"/>
                <label>Price</label>
                <input id="price" name="price" type="text" step="any"/>
                <button>Update</button>
            </div>
        );
    }
}