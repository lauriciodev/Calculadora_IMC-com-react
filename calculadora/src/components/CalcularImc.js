import React from "react";

function calcularImc(props){
    const calc =()=>{
        if(props.p > 1 && props.a > 1 ){
        props.sr(props.p/(props.a*props.a))
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
    
    export default calcularImc;