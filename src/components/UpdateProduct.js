import React from 'react';

const DESTINATION = '/update';

export default class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0,
            price: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let id = e.target.id;
        let value = e.target.value;

        switch(id) {
            case 'name':
                this.setState({ name: value });
                break;
            case 'quantity':
                this.setState({ quantity: value });
                break;
            case 'price':
                this.setState({ price: value });
                break;
            default:
                console.log(`Unexpected element: ${e.target}`);
        }
    }

    render() {
        let data = {
            product: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price
        };

        return (
            <div>
                <h3>Update</h3>
                <label>Product</label>
                <input id="name" type="text" onChange={this.handleChange}/>
                <label>Quantity</label>
                <input id="quantity" type="number" onChange={this.handleChange}/>
                <label>Price</label>
                <input id="price" type="text" step="any" onChange={this.handleChange}/>
                <button onClick={() => this.props.makePost(DESTINATION, data)}>Update</button>
            </div>
        );
    }
}