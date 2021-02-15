import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
    let nome = "";
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            console.log(nome);
        }}>

            <TextField onChange={event => {
                nome = event.target.value;

                if (nome.length > 3) {
                    nome = nome.substr(0, 3);
                }

            }}
                id="nome" label="Nome" variant="outlined" fullWidth margin="normal" />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth margin="normal" />
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth margin="normal" />
            <FormControlLabel label="Promoções" control={
                <Switch
                    name="promocoes"
                    defaultChecked
                    color="primary"
                />

            } />

            <FormControlLabel label="Novidades" control={
                <Switch
                    name="novidades"
                    defaultChecked
                    color="primary"
                />


            } />

            <Button variant="contained" color="primary" type="submit">
                Cadastrar
            </Button >
        </form>

    );
}

export default FormularioCadastro;