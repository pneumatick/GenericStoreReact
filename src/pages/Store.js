import React from "react";
import Product from "../components/Product";

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    async getProducts() {
        let newProducts = [];

        await fetch('http://localhost:8080/store/products')
        .then((response) => response.json())
        .then((products) => {
            products.forEach((product, id) => {
                //let productListing = <p key={id}>{product.product}: ${product.price} ({product.quantity} available)</p>;
                let productListing = <Product 
                    key={id}
                    name={product.product}
                    price={product.price}
                    quantity={product.quantity}
                    addToCart={this.props.addToCart}
                />;
                newProducts.push(productListing);
            });
        });

        this.setState({ products: newProducts });
    }

    componentDidMount() {
        this.getProducts();
    }

    render() {
        return (
            <div className="Store">
                <h1>Store</h1>
                <div className="Store-products">
                    {this.state.products}
                </div>
            </div>
        );
    }
}