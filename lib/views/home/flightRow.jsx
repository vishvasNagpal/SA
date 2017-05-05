"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');


class flightRow extends AbstractComponent {
    render() {
        let data = this.props.data;
        let sourceToDestination = this.props.sourceToDestination;
        let destinationToSource = this.props.destinationToSource;
        return(
            <div className="flightContent">
                {sourceToDestination.routes ? <div className={this.props.returnFlight ? "halfWidth item items" : "items fullWidth fl padding10"}>
                    {sourceToDestination.routes.map(function(route){
                        return  <div className="row">
                                    <div className="info">

                                        <h2>
                                            {sourceToDestination.originCityCode}
                                            <span className="sap"></span>
                                            {sourceToDestination.destCityCode}
                                        </h2>

                                        <h3>Depart: {route.departTime}</h3>
                                        <h3>Arrive: {route.ariveTime}</h3>
                                        <p>{route.flightCode}</p>
                                    </div>
                                    <div className="priceBtn">{route.price.toFixed(2)}</div>
                                </div>
                    })}
                </div>: null}
                {   this.props.returnFlight && destinationToSource.routes ?
                    <div className="halfWidth items item fl padding10">
                        {destinationToSource.routes.map(function(route){
                            return  <div className="row">
                                <div className="info">

                                    <h2>
                                        {destinationToSource.originCityCode}
                                        <span className="sap"></span>
                                        {destinationToSource.destCityCode}
                                    </h2>

                                    <h3>Depart: {route.departTime}</h3>
                                    <h3>Arrive: {route.ariveTime}</h3>
                                    <p>{route.flightCode}</p>
                                </div>
                                <div className="priceBtn">{route.price.toFixed(2)}</div>
                            </div>
                        })}
                    </div> : ''
                }

            </div>
        );
    }
}


module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data,
        returnFlight:state.model.data.returnFlight,
        sourceToDestination:state.model.data.sourceToDestination,
        destinationToSource:state.model.data.destinationToSource
    };
})(flightRow);