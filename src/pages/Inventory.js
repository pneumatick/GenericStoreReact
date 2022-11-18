import React from 'react';
import axios from 'axios';
import CreateProduct from '../components/CreateProduct';
import UpdateProduct from '../components/UpdateProduct';
import DeleteProduct from '../components/DeleteProduct';

const URL = 'http://localhost:8080/inventory';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            authorized: false,
            selectedForm: 0
        };

        this.composePostReq = this.composePostReq.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // Make an inventory-related POST request.
    // Intended for creating, updating, and deleting products.
    async composePostReq(destination, data) {
        await axios({
            method: 'post',
            url: URL + destination,
            withCredentials: true,
            data: data
        })
        .then((res) => {
            if (res.status === 200) {
                console.log("Post successful!");
                return true;
            }
            else {
                console.log(`Status: ${res.status}`);
            }
        })
        .catch((error) => {
            console.error(error.message);
        });

        return false;
    }

    handleClick(e) {
        switch (e.target.id) {
            case 'create':
                this.setState({ selectedForm: 0 });
                break;
            case 'update':
                this.setState({ selectedForm: 1 });
                break;
            case 'delete':
                this.setState({ selectedForm: 2 });
                break;
            default:
                console.log(`Unexpected element: ${e.target}`);
        }
    }

    // Unnecessary; Remove later
    //
    // Confirm that the user is authorized to view the control panel forms.
    // Status 200 = Authorized
    // Any other status = Unauthorized (may need to handle some statuses explicitly later)
    componentDidMount() {
        axios({
            method: 'get',
            url: URL,
            withCredentials: true
        })
        .then((res) => {
            if (res.status === 200) {
                this.setState({ loading: false, authorized: true});
            }
        })
        .catch((error) => {
            console.error(error.message);
            this.setState({ loading: false, authorized: false});
        });
    }

    render() {
        let loading = this.state.loading;
        let authorized = this.state.authorized;
        let selectedForm = this.state.selectedForm;
        let forms = [
            <CreateProduct key='create' makePost={this.composePostReq} />,
            <UpdateProduct key='update' makePost={this.composePostReq} />,
            <DeleteProduct key='delete' makePost={this.composePostReq} />
        ];
        let page = [
            <h1 key="title">Inventory Control Panel</h1>,
            <div key="Inventory-navbar" className='Inventory-navbar'>
                <button id="create" className='Nav-button' onClick={this.handleClick}>Create</button>
                <button id="update" className='Nav-button' onClick={this.handleClick}>Update</button>
                <button id="delete" className='Nav-button' onClick={this.handleClick}>Delete</button>
            </div>,
            forms[selectedForm]
        ];

        return (
            <div>
                {loading ? <p>Loading...</p> : null}
                {authorized ? page : <p>You have not been authorized to view this page</p>}
            </div>
        );
    }
}