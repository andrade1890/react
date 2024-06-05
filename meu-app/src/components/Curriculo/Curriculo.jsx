import React from "react";


import data from "./Curriculo.json"

function Curriculo(){
    return (
        <div>
         

        <section>
            <h2>Resumo</h2>
            <p>{data.resumo}</p>
        </section>
        <section>

            <h2>academico</h2>
            <ul>
                {data.experienciaAcademica.map((item, index) => (
                  <li key={index}>
                    <b>({item.datainicio} - {item.dataFim})</b> {item.titulo};
                 </li>
                ))}
             
            </ul>

        </section>

        <section>

            <h2>profissional</h2>
            <ul>
            {data.experienciaProfissional.map((item, index) => (
                  <li key={index}>
                    <b>({item.datainicio} - {item.dataFim})</b> {item.titulo};
                 </li>
                ))}
            </ul>
        </section>
        </div>
    )
} 
export default Curriculo;