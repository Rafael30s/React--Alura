import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioDeCadastro/FormularioDeCadastro';
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1">
          Formulário de cadastro
    </Typography>

        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </Container>

    );
  }

}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
