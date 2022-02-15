import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Woo() {

  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
const onTextChange = (e ) => setTextValue(e.target.value);
  const handleSubmit = useCallback(() => {
    const fieldUrl = urlRef.current.value
    const fieldConsumer = consumerRef.current.value
    const fieldSenha = senhaRef.current.value
    console.log(urlRef.current.value)
    if( !fieldUrl || !fieldConsumer || !fieldSenha){
      setMessage("Verifique se os campos estão preenchidos!")
      setType("error")
      setOpen(true)
    return 
    }
    setMessage("Enviado com sucesso")
    setType("success")
    setOpen(true)
  },[]);

   const urlRef = useRef(null)
   const consumerRef = useRef(null)
   const senhaRef = useRef(null)
 

  const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto"}
  const btnstyle={margin:'8px 0',btnHover:'black'}
  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração WooCommerce</h2>
                </Grid>
                <TextField 
                inputRef={urlRef}
                label='URL' placeholder='Insira a URL da sua loja ' fullWidth required/>
                <TextField 
                inputRef={consumerRef}
                label='Consumer Key' placeholder='Insira a consumer Key do WooCommerce ' fullWidth required/>
                <TextField 
                inputRef={senhaRef}
                label='Senha do consumidor' placeholder='Insira a senha do Consumidor do WooCommerce' type='password' fullWidth required/>

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