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

    async getPage() {
        let authorized = false;

        let res = await axios({
            method: 'get',
            url: URL,
            withCredentials: true
        })
        .then((res) => {
            res.status == 200 ? authorized = true : authorized = false;
        })
        .catch((error) => {
            console.error(error.message)
        });

        this.setState({ loading: false, authorized: authorized});
    }

    async composePostReq(destination, data) {
        let res = await axios({
            method: 'post',
            url: URL + destination,
            withCredentials: true,
            data: data
        })
        .then((res) => {
            if (res.status == 200) {
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

    async componentDidMount() {
        this.getPage();
    }

    render() {
        let page;

        if (this.state.loading) {
            page = <p>Loading...</p>;
        }
        else if (!this.state.authorized) {
            page = <p>You are not authorized to view this page</p>;
        }
        else {
            page = [
                <CreateProduct makePost={this.composePostReq} />,
                <UpdateProduct makePost={this.composePostReq} />,
                <DeleteProduct makePost={this.composePostReq} />
            ];
        }

        return (
            <div>
                {page}
            </div>
        );
    }
}