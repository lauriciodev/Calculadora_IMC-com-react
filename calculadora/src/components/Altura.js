import React from "react";

function Altura(props){
    return(
      <>
      <p>altura</p>
       <input type="text" value={props.altura} onChange={(e)=>props.sAlt(e.target.value)} placeholder="digite sua altura" />
      </>
     
    )
    }
    
    export default Altura;