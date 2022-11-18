import React from 'react';

export default class Product extends React.Component {
    render() {
        let name = this.props.name;
        let quantity = this.props.quantity;
        let price = this.props.price;

        return (
            <div className='Product'>
                <div className='Product-image-container'>
                    <image src='#'>
                        Image goes here
                    </image>
                </div>
                <p>{name}: ${price}</p>
                <p>{quantity} available</p>
                <button 
                    className='Product-button'
                    onClick={() => this.props.addToCart(name)}
                >
                    Add to cart
                </button>
            </div>
        );
    }
}