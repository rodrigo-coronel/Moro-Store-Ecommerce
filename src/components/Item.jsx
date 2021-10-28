import { Link } from "react-router-dom";
import React from 'react'
import Card from "react-bootstrap/Card"
import "./styles/card.css"

const Item = ({producto}) => {
    return (
            <Card className="card text-center animate__animated animate__fadeIn" key={producto.id}>
                <div className= "overflow">
                    <Card.Img className="cardImg" variant="top" src={producto.pictureUrl}/>
                </div>
                <Card.Body>
                    <Card.Title className="cardTitle">
                        {producto.title}
                    </Card.Title>
                    <Card.Text>
                        ${producto.price}
                    </Card.Text>
                    <Link to={`/detalle/${producto.id}`}>
                        <button type="button" className="btn btn-primary">Ver Detalles</button>
                    </Link>
                </Card.Body>
            </Card>
    )
}

export default Item
