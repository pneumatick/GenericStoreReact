import React from "react";

const DESTINATION = '/delete';

export default class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
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
            default:
                console.log(`Unexpected element: ${e.target}`);
        }
    }

    postWrapper() {
        let nameField = document.getElementById('name');
        let data = {
            product: this.state.name.trim(),
        };

        let success = this.props.makePost(DESTINATION, data);
        if (success) {
            this.setState({
                name: '',
            });
            nameField.value = '';
        }
    }

    render() {
        let name = this.state.name.trim();
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
                    onClick={this.postWrapper}
                    disabled={disabled}
                >
                    Delete
                </button>
            </div>
        );
    }
}