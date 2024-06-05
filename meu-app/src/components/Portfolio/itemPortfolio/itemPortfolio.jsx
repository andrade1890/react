import React from "react";

import "./itemPortfolio.css"


function itemPortfolio(props) {
    return (
        <div className="itemPortfolio"> 
          <a href={props.link} target="_blank">
            <img src= {props.image} alt="capa comeia cademy" />
            <p>{props.title}</p>
          </a>
        </div>
    )
}

export default itemPortfolio;