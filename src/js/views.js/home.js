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
            <NavBar />
                <div className="charCards"> 
                    {this.state.char.length > 1 ? (
                        this.state.char.map((character, cardIndex) => {
                            return (
                                <Card key={cardIndex} name={character.name} />
                            )
                        })
                    ) : (
                        <h1>Loading...</h1>
                    )}
                    :
                </div>
                <Planets />
            </div>
        );
    }
}
