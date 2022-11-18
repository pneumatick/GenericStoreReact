import React from "react";

export default class Home extends React.Component {
    render() {
        return (
            <div className="Home-page">
                <div className="Home-container">
                    <h1 className="Page-title">Home</h1>
                    <p>This is the home page, which should be the first thing you see when visiting the site.</p>
                </div>
            </div>
        );
    }
}