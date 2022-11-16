import React from "react";

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
                let productListing = <p key={id}>{product.product}: ${product.price} ({product.quantity} available)</p>;
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
            <div>
                <h1>Store</h1>
                {this.state.products}
            </div>
        );
    }
}