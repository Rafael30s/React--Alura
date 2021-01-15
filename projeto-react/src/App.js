import React, { Component } from "react"
import ListaDeNotas from "./componentes/ListaDeNotas"
import { FormualarioCadastro } from "./componentes/FormularioCadastro";

class App extends Component{
  render(){
    return (
      <section>
        <FormualarioCadastro/>
       <ListaDeNotas/>
      </section>
    );
  }
 
}

export default App;
