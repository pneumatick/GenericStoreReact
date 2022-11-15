import React from 'react';
import axios from 'axios';
import Parser from 'html-react-parser';

const URL = 'http://localhost:8080/inventory';

export default class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = { page: '<p>Loading...</p>' };
    }

    // I don't know if this is the best method, but it does work
    async getPage() {
        let page = '';
        let res = await axios({
            method: 'get',
            url: URL,
            withCredentials: true
        })
        .then((res) => {
            page = res.data;
        })
        .catch((error) => {
            console.error(error.message)
        });
        return await page;
    }

    async componentDidMount() {
        let page = await this.getPage();
        this.setState({ page: page ? page : '<p>Failed to get page</p>' });
    }

    render() {
        return (
            <div>
                {Parser(this.state.page)}
            </div>
        );
    }
}