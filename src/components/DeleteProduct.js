import React from "react";

export default class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    render() {
        return (
            <div>
                <h3>Delete</h3>
                <label>Product</label>
                <input id="product" name="product" type="text"/>
                <button>Delete</button>
            </div>
        );
    }
}