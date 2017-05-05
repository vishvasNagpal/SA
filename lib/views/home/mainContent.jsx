"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');
const MainHead = requireLib('views/home/mainHead');
const FlightRow = requireLib('views/home/flightRow');

class mainContent extends AbstractComponent {
    render() {
        let data = this.props.data;
        return(
            <div className="mainContent">
                <MainHead></MainHead>
                <FlightRow></FlightRow>
            </div>
        );
    }
}

mainContent.propTypes = {
    //viewConfig: React.PropTypes.string.isRequired
};

module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(mainContent);