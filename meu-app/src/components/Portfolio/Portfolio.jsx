import React from "react";

import "./Portfolio.css";

import claudevan from "../../assets/claudevan.png";

function Portfolio() {
    return (
        <main>
            
        <div className="item-portfolio">
          <a href="https://academy.comeialabs.com.br/" target="_blank">
          <img src={claudevan} alt="capa comeia academy" />
          <p>site comeia academy</p>
        </a>
        </div>

      <div className="item-portfolio">
          <a href="https://academy.comeialabs.com.br/">
          <img src={claudevan} alt="capa comeia academy" />
          <p>site comeia academy</p>
         </a>
      </div>

      <div className="item-portfolio">
          <a href="https://academy.comeialabs.com.br/">
          <img src={claudevan} alt="capa comeia academy" />
          <p>site comeia academy</p>
        </a>
      </div>
      
      </main>
    )
}
export default Portfolio;