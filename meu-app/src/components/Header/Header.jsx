import React from "react";
import claudevanavatar from "../../assets/claudevan.png"

function Header() {
    return (  
      <header>
        <img src={claudevanavatar} alt="foto de rosto de claudevan" />
        <h1 id ="nome-perfil">Claudevan de Andrade</h1>
        <h3 id="eventosubtitulo">Bacharel em Administração</h3>
     </header>
    )
}

export default Header;