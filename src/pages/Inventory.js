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
            authorized: false
        };

        this.composePostReq = this.composePostReq.bind(this);
    }

    // Confirm that the user is authorized to view the control panel forms.
    // Status 200 = Authorized
    // Any other status = Unauthorized (may need to handle some statuses explicitly later)
    async getPage() {
        let authorized = false;

        let res = await axios({
            method: 'get',
            url: URL,
            withCredentials: true
        })
        .then((res) => {
            res.status === 200 ? authorized = true : authorized = false;
        })
        .catch((error) => {
            console.error(error.message)
        });

        this.setState({ loading: false, authorized: authorized});
    }

    // Make an inventory-related POST request.
    // Intended for creating, updating, and deleting products.
    async composePostReq(destination, data) {
        let res = await axios({
            method: 'post',
            url: URL + destination,
            withCredentials: true,
            data: data
        })
        .then((res) => {
            if (res.status === 200) {
                console.log("Post successful!");
            }
            else {
                console.log(`Status: ${res.status}`);
            }
        })
        .catch((error) => {
            console.error(error.message)
        });
    }

    componentDidMount() {
        this.getPage();
    }

    render() {
        let page;
        let forms = [
            <CreateProduct makePost={this.composePostReq} />,
            <UpdateProduct makePost={this.composePostReq} />,
            <DeleteProduct makePost={this.composePostReq} />
        ];

        // Ensure that unauthorized users cannot see the forms
        if (this.state.loading) {
            page = <p>Loading...</p>;
        }
        else if (!this.state.authorized) {
            page = <p>You are not authorized to view this page</p>;
        }
        else {
            page = forms;
        }

        return (
            <div>
                <h1>Inventory Control Panel</h1>
                {page}
            </div>
        );
    }
}