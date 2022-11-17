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
        let data = { product: this.state.name };
        let name = this.state.name;
        let disabled = true;

        name ? disabled = false : disabled = true;

        return (
            <div className="Inventory-form">
                <h3>Delete</h3>
                <div className="Form-field">
                    <label>Product</label>
                    <input id="name" type="text" onChange={this.handleChange}/>
                </div>
                <button 
                    className="Form-button"
                    onClick={() => this.props.makePost(DESTINATION, data)}
                    disabled={disabled}
                >
                    Delete
                </button>
            </div>
        );
    }
}