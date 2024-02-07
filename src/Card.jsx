import React from "react";
import CardImg from "../src/Images/s1.jpg"

const Card = (props) => {
    return <div className="col-md-4 col-10 mx-auto">
        <div className="card" >
            <img className="card-img-top" src={props.imgSrc} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
}

export default Card;