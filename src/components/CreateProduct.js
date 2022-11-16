import React from 'react';

const DESTINATION = '/create';

export default class CreateProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quantity: 0,
            price: 0
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
        let data = {
            product: this.state.name,
            quantity: this.state.quantity,
            price: this.state.price
        };

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
                >
                    Create
                </button>
            </div>
        );
    }
}