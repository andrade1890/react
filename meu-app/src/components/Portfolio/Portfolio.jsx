import React from "react";

import "./Portfolio.css";
import claudevan from "../../assets/claudevan.png";

function Portfolio() {

  
  const portfolios= [
    {
      link: "https://academy.comeialabs.com.br/",
      image: "../../assets/claudevan.png",
      title: "portifolio 1"
    },
    {
      link: "https://academy.comeialabs.com.br/",
      image: "../../assets/claudevan.png",
      title: "portifolio 2"
    },
    {
      link: "https://academy.comeialabs.com.br/",
      image: "../../assets/claudevan.png",
      title: "portifolio 3",
    }
   ];

    return (
        <main>

         {portfolios.map(
             (portfolio)=> 
               <div className="item-portfolio">
             <a href="https://academy.comeialabs.com.br/" target="_blank">
             <img src={claudevan} alt="capa comeia academy" />
              <p>{portfolio.title}</p>
             </a>
           </div>
        )}
            
      </main>
    )
}
export default Portfolio;