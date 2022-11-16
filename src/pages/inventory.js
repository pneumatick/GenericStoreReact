import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:8080/inventory';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            loading: true,
            authorized: false
        };
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

    async componentDidMount() {
        this.getPage();
    }

    render() {
        let page;

        if (this.state.loading) {
            page = <p>Loading...</p>;
        }
        else if (this.state.authorized) {
            page = <p>Authorized</p>;
        }
        else {
            page = <p>You are not authorized to view this page</p>;
        }

        return (
            <div>
                {page}
            </div>
        );
    }
}