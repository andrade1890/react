import React from "react";


import Portfoliojson from './Portfolio.json'
import ItemPortfolio from "./itemPortfolio/itemPortfolio";
import "./Portfolio.css";

function Portfolio(){

    return (
        <main>

         {Portfoliojson.map(
             (item,index)=> 

           <ItemPortfolio
           key={index}
              link={item.link}
              image={item.image}
              title={item.title}
           ></ItemPortfolio>
         )}
            
      </main>
    )
}
export default Portfolio;