"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');


class mainHead extends AbstractComponent {
    render() {
        let data = this.props.data;
        let sourceToDestination = this.props.sourceToDestination;
        return(
            <div className="mainHead">
                {!this.props.showFlightDetails
                    ?   <h2>Welcome</h2>
                    :   <div className="flightDetail">
                            <div className="pathInfo">
                                {sourceToDestination.originCityName}
                                <span className="sap">  </span>
                                {sourceToDestination.destCityName}
                                {this.props.returnFlight ? <span className="sap">  </span> : ''}
                                {this.props.returnFlight ? sourceToDestination.originCityName : ''}
                            </div>
                            <div className="timeInfo">
                                <p>Depart: {data.depDate.toDateString()}</p>
                                {this.props.returnFlight ? <p>Return: {data.retDate.toDateString()}</p> : ''}
                            </div>
                        </div>
                }
            </div>
        );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data,
        showFlightDetails:state.model.data.showFlightDetails,
        sourceToDestination:state.model.data.sourceToDestination,
        returnFlight:state.model.data.returnFlight
    };
})(mainHead);