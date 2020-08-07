import React from "react";
import { NavBar } from "../component/navbar";
import { Card } from "../component/card"

//create your first component
export class Home extends React.Component {
    constructor () {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="heading"> </div>
                <div className="navbar"> <NavBar /> </div>
                <div className="cards"> <Card /> </div>
            </div>
        )
    }
}
