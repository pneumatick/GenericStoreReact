import React from 'react';

const DESTINATION = '/create';

export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: ''
        }
    
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
        let name = this.state.name.trim();
        let quantity = this.state.quantity.trim();
        let price = this.state.price.trim();
        let validQuantity = false;
        let validPrice = false;
        let disabled = true;
        let data = {
            product: name,
            quantity: quantity,
            price: price
        };

        // Check for valid quantity and price
        quantity >= 0 && quantity !== '' ? validQuantity = true : validQuantity = false;
        price >= 0 & price !== '' ? validPrice = true : validPrice = false;

        // Ensure the required conditions are met before enabling the update button
        name && validQuantity && validPrice ? disabled = false : disabled = true;

        return (
            <div className='Inventory-form'>
                <h3>Create</h3>
                <div className='Form-field'>
                    <label>Product</label>
                    <input id="name" type="text" onChange={this.handleChange}/>
                </div>
                <div className='Form-field'>
                    <label>Quantity</label>
                    <input id="quantity" type="number" onChange={this.handleChange}/>
                </div>
                <div className='Form-field'>
                    <label>Price</label>
                    <input id="price" type="text" step="any" onChange={this.handleChange}/>
                </div>
                <button 
                    className='Form-button'
                    onClick={() => this.props.makePost(DESTINATION, data)}
                    disabled={disabled}
                >
                    Create
                </button>
            </div>
        );
    }
}