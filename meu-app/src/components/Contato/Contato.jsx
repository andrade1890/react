import React from "react";

import "./Contato.css";

function Contato() {
    return (
        <>

<form action="">

            <fieldset>
                <label htmlFor="input-nome">nome</label>
                <input type="text" name="input-nome" id="input-nome" />
            </fieldset>

            <fieldset>
              <label htmlFor="input-email">E-mail</label>
              <input type="email" name="input-email" id="input-email" />
            </fieldset>

            <fieldset>
                <label htmlFor="input-tel">telefone</label >
                <input type="tel" name="input-tel" id="input-tel" />
            </fieldset>

            <fieldset>
                <label htmlFor="input-msg">mensagem</label>
                <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
            </fieldset>

            <input type="submit" value="ENVIAR" className="button" id="submit-contact" onClick="enviarFormulario()" />

        </form>

    </>
      
    )
}

export default Contato;