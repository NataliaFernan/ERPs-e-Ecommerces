import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material';




export default function IdealeWare() {

  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
const onTextChange = (e ) => setTextValue(e.target.value);
const handleSubmit = useCallback(() => {
  const fieldDomi = domiRef.current.value
  const fieldEmail = emailRef.current.value
  const fieldSenha = senhaRef.current.value
  console.log(domiRef.current.value)
  if( !fieldDomi || !fieldEmail || !fieldSenha){
    setMessage("Verifique se os campos estão preenchidos!")
    setType("error")
    setOpen(true)
  return 
  }
  setMessage("Enviado com sucesso")
  setType("success")
  setOpen(true)
},[]);

 const domiRef = useRef(null)
 const emailRef = useRef(null)
 const senhaRef = useRef(null)
 

    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração IdealaWare</h2>
                </Grid>
                <TextField 
                inputRef={domiRef}
                label='Domínio da loja' placeholder='Insira o dominio da loja ' fullWidth required/>
                <TextField  
                inputRef={emailRef}
                label='Email' placeholder='Insira o email ' fullWidth required/>
                <TextField 
                inputRef={senhaRef}
                label='Senha' placeholder='Insira a Senha' type='password' fullWidth required/>


                <Button onClick={handleSubmit} type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Enviar</Button>
                
                </Paper>


                <Snackbar open={open} autoHideDuration={10000} anchorOrigin={{  vertical: 'top', horizontal: 'center', }} onClose={handleClose}>
                    <Alert severity={type} sx={{ width: '100%' }}>
                       {message}
                    </Alert>
                </Snackbar>
    </Grid>
  )
}
