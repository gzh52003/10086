import React from 'react';
// import SubRouters from "./utils/SubRouter"
import { Redirect, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import TOM from "./pages/TOM"
import Bill from "./pages/Bill"
import Alex from "./pages/Alex"
import User from "./pages/User"
import Admin from "./pages/Admin"

// const ConfigRouter = [
//     {
//         path: "home",
//         name: "home",
//         component: Home
//     },
//     {
//         path: "tom",
//         name: "tom",
//         component: () => import("./pages/TOM")
//     },
//     {
//         path: "bill",
//         name: "bill",
//         component: () => import("./pages/Bill")
//     },
//     {
//         path: "alex",
//         name: "alex",
//         component: () => import("./pages/Alex")
//     },
//     {
//         path: "user",
//         name: "user",
//         component: () => import("./pages/User")
//     },
//     {
//         path: "admin",
//         name: "admin",
//         component: () => import("./pages/Admin")
//     }
// ]


export default function ReRouter() {
    return (
        <Switch>
            <Route path="/home" component={Home} exact />
            <Route path="/home/tom" component={TOM} />
            <Route path="/home/bill" component={Bill} />
            <Route path="home//alex" component={Alex} />
            <Route path="/home/user" component={User} />
            <Route path="/home/admin" component={Admin} />
            <Redirect to="/home" from="/" exact />
        </Switch>
    )
}
