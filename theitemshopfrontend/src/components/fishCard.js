import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function FishCard(props) {

    String.prototype.Capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <div style={{ margin: "10px" }}>
            <Link to={"/fish/" + props.id} style={{color: "black"}}><Card style={{ width: '18rem', backgroundColor: "rgba(36, 250, 36, 0.349)" }} key={props.id}>
                <Card.Img variant="top" src={props.icon_uri} alt="fish" />
                <Card.Body>
                    <Card.Title>{props.name["name-USen"].Capitalize()}</Card.Title>
                    <Card.Text>
                        Rarity: {props.rarity}
                        <br />
                        Price: ${props.price}
                    </Card.Text>
                </Card.Body>
            </Card ></Link>
        </div>
    )

}