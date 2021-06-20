import React, { Component } from "react";
import CardNota from "../CardNota";
import "./estilo.css";
class ListaDeNotas extends Component {
 
  constructor(){
    super();
    this.state = {notas:[],filmes:[]}
    this._novasNotas = this._novasNotas.bind(this);
  }
  componentDidMount(){
    this.props.notas.inscrever(this._novasNotas); 
       
  }
  componentWillUnmount(){
    this.props.notas.desinscrever(this._novasNotas);

  }
  _novasNotas(notas){
    this.setState({...this.state,notas})
  }

  render() {

    return (
      <ul className="lista-notas">
        {this.state.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              {"Nota:"+console.log(nota)}

              {/* {this.state.nota.pesquisa.map((filme,index)=>{
                console.log(index+": "+ filme);
              }


              )} */}
              <CardNota 
              indice={index}
              apagarNota={this.props.apagarNota}
              titulo={nota.titulo} 
              texto={nota.texto}
              categoria={nota.categoria}
              busca={nota.pesquisa}
              />
            </li>
          );
        })}
                {this.state.notas.map((filme, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              
              <CardNota 
              indice={index}
              apagarNota={this.props.apagarNota}F
              titulo={filme.Title} 
              texto={filme.Poster}
              categoria={filme.Year}
              
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;