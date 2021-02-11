import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

function FormularioCadastro() {
    return (
        <form>
           
           <TextField id="nome" label="Nome" variant="outlined" fullWidth margin="normal"/>
           <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal"/>
           <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal"/>

            <label>Promoções:</label>
            <input type="check" />
            <label>Novidades:</label>
            <input type="check" />
            <Button  variant="contained" color="primary" type="submit">
                Cadastrar
            </Button >
        </form>

    );
}

export default FormularioCadastro;