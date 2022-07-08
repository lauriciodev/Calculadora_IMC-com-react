import React from "react";

function Peso(props){
    return(
      <>
      <p>peso</p>
      <input type="text" value={props.peso} onChange={(e)=>props.sPes(e.target.value)} placeholder="digite seu peso" />
      </>
     
    )
    }
    
    export default Peso;