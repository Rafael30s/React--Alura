import React, { Component } from "react"

export class FormualarioCadastro extends Component{
    render(){
        return (
            <form>
            <input type="text" placeholder="titulo" />
            <textarea placeholder="Escreva sua nota..." />
    
            <button>Criar nota</button>
          </form>
        )
    }
}

