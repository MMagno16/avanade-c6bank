import React, { FormEvent, useEffect, useState } from 'react';
import {
    Typography,
    Container,
    Button,
    TextField,
    Checkbox,
    Box,
    CssBaseline,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Snackbar from '../components/utils/Snackbar';
import Copyright from '../components/utils/Copyright';
import Login from '../components/Form/Login';



//@mui/material

const theme = createTheme();


export default function LoginPage(){

//state com variável.
// one way data binding. significa que o react envia dados para o DOM. O que o DOM faz não importa.

const [email, setEmail] = useState<string | undefined |null>('');
const [password, setPassword] = useState<string | undefined | null | FormDataEntryValue>('');
//error
//errorMessage
//open
//contador
const [error, setError] = useState<boolean>(false);
const [errorMessage, setErrorMessage] = useState<string>('');
const [open, setOpen] = useState<boolean>(false);
const [contador, setContador] = useState<number>(0);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />

            <Login />    
            </Container>
        </ThemeProvider>
    )
}

// desafio 1
// pasta form, dentro de compoents
//outra pasta chamada login
//outra pasta chamada register


// desafio 2
// criar formulario do register
//dupplicar a pagina e inserir dois campos
// nome/ email/ senha E confirmar a senha