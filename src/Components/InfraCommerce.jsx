import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function InfraCommerce() {
  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
const onTextChange = (e ) => setTextValue(e.target.value);
const handleSubmit = useCallback(() => {
  const fieldNome = nomeRef.current.value
  const fieldUrl = urlRef.current.value
  const fieldUser = userRef.current.value
  const fieldSenha = senhaRef.current.value
  console.log(nomeRef.current.value)
  if( !fieldNome || !fieldUrl || !fieldUser || !fieldSenha){
    setMessage("Verifique se os campos estão preenchidos!")
    setType("error")
    setOpen(true)
  return 
  }
  setMessage("Enviado com sucesso")
  setType("success")
  setOpen(true)
},[]);

 const nomeRef = useRef(null)
 const urlRef = useRef(null)
 const userRef = useRef(null)
 const senhaRef = useRef(null)

 
    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto",paddingBottom:'1rem'}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Infra.commerce</h2>
                </Grid>
                <TextField 
                inputRef={nomeRef}
                label='Nome da loja no infracommerce' placeholder='Insira o nome da loja no infracommerce' fullWidth required/>
                <TextField
                inputRef={urlRef}
                label='Url da loja' placeholder='Insira o Url da loja no infracommerce' fullWidth required/>
                <TextField 
                inputRef={userRef}
                label='Usuário' placeholder='Insira o usuário no infracommerce ' fullWidth required/>
                <TextField 
                inputRef={senhaRef}
                label='Senha' placeholder='Insira a senha do infracommerce' type='password' fullWidth required/>
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