import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../components/Dashboard/Dashboard'
import MensClothing from "../components/Caterogy/MensClothing";
import WomenClothing from "../components/Caterogy/WomenClothing";
import Electronics from "../components/Caterogy/Electronics";
import Jewelery from "../components/Caterogy/Jewelery";

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={Dashboard} exact={true} />
                <Route path='/men-clothing' component={MensClothing} />
                <Route path='/women-clothing' component={WomenClothing} />
                <Route path='/electronics' component={Electronics} />
                <Route path='/jewelery' component={Jewelery} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;