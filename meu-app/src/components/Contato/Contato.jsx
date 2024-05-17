import React from "react";

function Contato() {
    return (
        <main>

<form action="">

            <fieldset>
                <label for="input-nome">nome</label>
                <input type="text" name="input-nome" id="input-nome" />
            </fieldset>

            <fieldset>
              <label for="input-email">E-mail</label>
              <input type="email" name="input-email" id="input-email" />
            </fieldset>

            <fieldset>
                <label for="input-tel">telefone</label >
                <input type="tel" name="input-tel" id="input-tel" />
            </fieldset>

            <fieldset>
                <label for="input-msg">mensagem</label>
                <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
            </fieldset>

            <input type="submit" value="ENVIAR" className="button" id="submit-contact" onclick="enviarFormulario()" />

        </form>

    </main>
      
    )
}

export default Contato;