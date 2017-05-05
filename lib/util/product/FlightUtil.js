"use strict";
class ProductUtil{
    static getFlightsDetails(req){
        let originCity = (req.query.originCity).toLowerCase();
        let destinationCity = (req.query.destCity).toLowerCase();
        let depDate = new Date(req.query.depDate);
        let retDate = req.query.retDate && new Date(req.query.retDate);
        let passengers = req.query.passengers;
        let data = {};
        data.depDate = depDate;
        data.sourceToDestination = searchFlight(originCity,destinationCity);
        if(retDate){
            data.destinationToSource = searchFlight(destinationCity,originCity,'return');
            data.returnFlight = true;
            data.retDate = retDate;
        }
        if(!data.sourceToDestination.err){
            data.showFlightDetails = true;

        }else{
            data.err = data.sourceToDestination.err;
        }

        return data;
    }
}

function searchFlight(cityA,cityB,type){
    let flightData = requireLib("data/flights").flights;
    for(let j = 0; j < flightData.length; j++){
        let item = flightData[j];
        if(item.city === cityA) {

            for(let i = 0; i < item.availability.length; i++){
                if(item.availability[i].destination === cityB){
                    let data = {};
                    if(type){
                        data.originCityName = item.city;
                        data.originCityCode= item.cityCode;
                        data.destCityName = item.availability[i].destination;
                        data.destCityCode  = item.availability[i].destCityCode;
                        data.routes = item.availability[i].routes;
                    }else{
                        data.originCityName = item.city;
                        data.originCityCode = item.cityCode;
                        data.destCityName = item.availability[i].destination;
                        data.destCityCode = item.availability[i].destCityCode;
                        data.routes = item.availability[i].routes;
                    }

                    return data;
                }
                else{
                    if(i === item.availability.length-1){
                        return {err:'No results found'};
                    }

                }
            }
        }else{
            if(j === flightData.length-1){
                return {err:'No results found'};
            }

        }

    }
}

module.exports = ProductUtil;