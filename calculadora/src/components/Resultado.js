import React from "react";

function Resultado(props){
      return(
        <>
         <p> resultado:{props.res.toFixed(2)}</p>
        </>
      )
    }
    
    export default Resultado;