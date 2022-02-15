import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function LinxO() {
  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
const onTextChange = (e ) => setTextValue(e.target.value);
const handleSubmit = useCallback(() => {
  const fieldUser = userRef.current.value
  const fieldSenha = senhaRef.current.value
  const fieldDomi = domiRef.current.value
  const fieldClient = clientRef.current.value
  const fieldChan = chanRef.current.value
  console.log(userRef.current.value)
  if( !fieldUser || !fieldSenha|| !fieldDomi || !fieldClient || !fieldChan){
    setMessage("Verifique se os campos estão preenchidos!")
    setType("error")
    setOpen(true)
  return 
  }
  setMessage("Enviado com sucesso")
  setType("success")
  setOpen(true)
},[]);

 
 const userRef = useRef(null)
 const senhaRef = useRef(null)
 const domiRef = useRef(null)
 const clientRef = useRef(null)
 const chanRef = useRef(null)

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Linx OMS</h2>
                </Grid>
                <TextField
                inputRef={userRef}
                label='Usuário ' placeholder='Insira o usuário do LinxOMS' fullWidth required/>
                <TextField 
                inputRef={senhaRef}
                label='Senha' placeholder='Insira a senha do LinxOMS ' type='password' fullWidth required/>
                <TextField 
                inputRef={domiRef}
                label='Dominio da API' placeholder='Insira o dominio da API LinxOMS' fullWidth required/>
                <TextField
                inputRef={clientRef}
                label='ClientId' placeholder='Insira o clientId do LinxOMS' fullWidth required/>
                <TextField 
                inputRef={chanRef}
                label='ChannelId ' placeholder='Insira o channelId do LinxOMS' fullWidth required/>
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