import React from "react";

function TabelaImc(){
return(
<>
<table border="1" style={{borderCollapse:"collapse", padding:"4px"}}>
      <thead>
        <tr>
          <td>Classificação</td>
          <td>IMC</td>
        </tr>
      </thead>

      <tbody>
        <tr>
           <td>Abaixo do peso</td>
           <td>abaixo de 18,5</td>
        </tr>
        <tr>
           <td>Peso normal</td>
           <td>Entre 18,5 e 24,9</td>
        </tr>
        <tr>
           <td>Sobrepeso</td>
           <td>Entre 25 e 29,9</td>
        </tr>
        <tr>
           <td>Obesidade grau I</td>
           <td>Entre  30 e 34,9 </td>
        </tr>
        <tr>
           <td>Obesidade grau II</td>
           <td>Entre 35 e 39,9</td>
        </tr>
        <tr>
           <td>Obesidade grau III</td>
           <td>Maior que 40</td>
        </tr>
      </tbody>
                
    </table>
</>
)
}

export default TabelaImc;