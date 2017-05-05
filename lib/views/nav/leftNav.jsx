"use strict";
let React = require('react');
const ReactRedux = require('react-redux');
const AbstractComponent = requireLib('views/AbstractComponent');

class leftNav extends AbstractComponent {
    render() {
        let data = this.props.data;
        return(
            <div className="leftNav open">
                <ul className="tabs">
                    <li className="tab">
                        <div className="tabInfo">Book Domestic and InterNational Flights</div>
                        <div className="tabHead one">One Way</div>
                        <div className="tabHead return selected">Return</div>
                    </li>
                    <div className="tabContent">
                        <form className="flightSubmit">
                            <div className="item">
                                <label>From</label>
                                <input type="text" name="originCity" placeholder="Origin City" />
                            </div>
                            <div className="item">
                                <label>To</label>
                                <input type="text" name="destCity" placeholder="Destination City" />
                            </div>

                            <div className="item">
                                <label>Depart</label>
                                <input type="date" name="depDate" />
                            </div>
                            <div className="item returnDate">
                                <label>Return</label>
                                <input type="date" name="retDate" />
                            </div>
                            <div className="item">
                                <label>Passengers</label>
                                <select name="passengers">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                </select>
                            </div>


                            <button type="submit">Search</button>
                        </form>
                    </div>
                </ul>
            </div>
        );
    }
}

leftNav.propTypes = {
    //viewConfig: React.PropTypes.string.isRequired
};

module.exports = ReactRedux.connect(function (state) {
    return {
        data:state.model.data
    };
})(leftNav);