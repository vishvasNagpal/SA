"use strict";

let StoreProvider = requireLib('client/base/StoreProvider');
var AbstractRouter = requireLib("config/route/AbstractRouter");
var homeConfig = requireLib("views/home/HomeConfig");
const MainContent = requireLib('views/home/mainContent');
var FlightUtil = requireLib("util/product/FlightUtil");

class HomeRouter extends AbstractRouter {
    get(req, res) {
        //let data = FlightUtil.getFlightsDetails(req);
        const html = StoreProvider.renderToStringFromModel({}, homeConfig);
        res.render('index', html,{title:'home'})

    }
    post(req,res){
        let data = FlightUtil.getFlightsDetails(req);
        if(data.err){
            res.send(data)
        }else{
            const html = StoreProvider.renderToStringFromModel({data:data}, MainContent);
            res.send(html);
        }


    }
}
module.exports = HomeRouter;
