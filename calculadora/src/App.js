import React, { useState } from "react"
import Altura from "./components/Altura"
import Peso from "./components/Peso"
import TabelaImc from "./components/TabelaImc"
import CalcularImc from "./components/CalcularImc"
import Resultado from "./components/Resultado"


function App() {
  const fres = (res) =>{
    return(
      <>
      </>
    )
  }



  const [alt,setAlt] = useState(0);
  const [pes,setPes] = useState(0);
  const [res,setRes] = useState(0);

  return (
  <div>
      <Altura altura={alt} sAlt={setAlt} />
      <Peso peso={pes} sPes={setPes} />
      <br/>
      <CalcularImc p={pes} a={alt} sr={setRes} />
      <Resultado res={res}/>
      <TabelaImc/>
  </div>
  );
}

export default App;
