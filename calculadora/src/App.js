import React, { useState } from "react"
import  _section, {_input,_dflex} from "./Styled"

function App() {


  const TableImc = () =>{
    return(
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
    )
  }

  const Altura = (a,sa) =>{
    return(
      <>
      <p>altura</p>
       <_input type="text" value={a} onChange={(e)=>sa(e.target.value)} placeholder="digite sua altura" />
      </>
     
    )
  }


  const peso = (p,sp) =>{
    return (
      <>
      <p>peso</p>
      <_input type="text" value={p} onChange={(e)=>sp(e.target.value)} placeholder="digite seu peso" />
      </>

    )
      
  }

  const caluclarImc =(a,p,sr)=>{
      const calc =()=>{
        if(p > 1 && a > 1 ){
        sr(p/(a*a))
        }else{
          alert("valor invalido")
        }
      }   

      return(
        <>
        <button onClick={calc}>calcular</button>
        </>
      )
  }

  const fres = (res) =>{
    return(
      <>
      <p> resultado:{res.toFixed(2)}</p>
      </>
    )
  }



  const [alt,setAlt] = useState(0);
  const [pes,setPes] = useState(0);
  const [res,setRes] = useState(0);

  return (
  <_section>´
    <_dflex>
     {peso(pes,setPes)} 
     {Altura(alt,setAlt)}
    </_dflex>
 
  {caluclarImc(alt,pes,setRes)}
  {fres(res)}
  {TableImc()}

  </_section>
  );
}

export default App;
