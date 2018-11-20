import React from "react";
import "./ImageCard.css";

const ImageCard = (props)=> (
    <div className="card mb-2" onClick={()=>props.fun(props)}>
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
);

export default ImageCard;
