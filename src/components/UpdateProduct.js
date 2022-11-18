import React from 'react';

const DESTINATION = '/update';

export default class UpdateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: '',
            price: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.postWrapper = this.postWrapper.bind(this);
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

    postWrapper() {
        let nameField = document.getElementById('name');
        let quantityField = document.getElementById('quantity');
        let priceField = document.getElementById('price');
        let data = {
            product: this.state.name.trim(),
            quantity: this.state.quantity.trim(),
            price: this.state.price.trim()
        };

        let success = this.props.makePost(DESTINATION, data);
        if (success) {
            this.setState({
                name: '',
                quantity: '',
                price: ''
            });
            nameField.value = '';
            quantityField.value = '';
            priceField.value = '';
        }
    }

    render() {
        let name = this.state.name.trim();
        let quantity = this.state.quantity.trim();
        let price = this.state.price.trim();
        let validQuantity = false;
        let validPrice = false;
        let disabled = true;

        // Check for valid quantity and price
        quantity >= 0 && quantity !== '' ? validQuantity = true : validQuantity = false;
        price >= 0 & price !== '' ? validPrice = true : validPrice = false;

        // Ensure the required conditions are met before enabling the update button
        name && validQuantity && validPrice ? disabled = false : disabled = true;

        return (
            <div className='Inventory-form'>
                <h3>Update</h3>
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
                    onClick={this.postWrapper}
                    disabled={disabled}
                >
                    Update
                </button>
            </div>
        );
    }
}