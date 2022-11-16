import React from "react";

const DESTINATION = '/delete';

export default class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
            default:
                console.log(`Unexpected element: ${e.target}`);
        }
    }

    render() {
        let data = {
            product: this.state.name
        };

        return (
            <div>
                <h3>Delete</h3>
                <label>Product</label>
                <input id="name" type="text" onChange={this.handleChange}/>
                <button onClick={() => this.props.makePost(DESTINATION, data)}>Delete</button>
            </div>
        );
    }
}