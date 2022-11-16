import React from "react";

export default class Store extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    render() {
        return (
            <div>
                <h1>Store</h1>
            </div>
        );
    }
}