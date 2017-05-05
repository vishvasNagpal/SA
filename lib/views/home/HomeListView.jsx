"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const ViewConfig = requireLib('constants/ViewConfig');
const LeftNav = requireLib('views/nav/leftNav');
const MainContent = requireLib('views/home/mainContent');


class HomeListView extends AbstractComponent {
    render() {
        let data = this.props.data;
        return(
            <div className="container">
                <div className="header">
                    <ul className="hamburg">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h1>Flight Search Engine</h1>
                </div>
                <div className="main">
                    <LeftNav></LeftNav>
                    <div className="placeHtml"></div>
                </div>

            </div>
            );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(HomeListView);