import React from "react";
import "./card-style.css"
import { Link } from 'react-router-dom'

const Card = props => {
    return (
       <div className="card text-center">
        <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className="card-img-top"/>
            </div>
        <div className="card-body text-dark">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text text-secondary">
            </p>
            <Link  to={"/forms/" + props.nome} >
            <a href="#" className="btn btn-outline-success">Inserção de dados para integração</a>
            </Link>
        </div>
       </div>
    );
}

export default Card;