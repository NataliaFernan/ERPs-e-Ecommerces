import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function IHub() {
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
  const fieldToken = tokenRef.current.value
  const fieldSeller = sellerRef.current.value
  console.log(domiRef.current.value)
  if( !fieldDomi || !fieldToken || !fieldSeller){
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
 const tokenRef = useRef(null)
 const sellerRef = useRef(null)
 


    const paperStyle={padding :20,height:'70vh',width:350, margin:"20px auto",paddingBottom:'1rem'}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração IHub</h2>
                </Grid>
                <TextField 
                inputRef={domiRef}
                label='Domínio para a API do iHub' placeholder='Insira o domínio para a API do iHub ' fullWidth required/>
                <TextField 
                inputRef={tokenRef}
                label='Token JWT para API do iHub' placeholder='Insira o token JWT para API do iHub ' fullWidth required/>
                <TextField 
                inputRef={sellerRef}
                label='Seller Id no iHub (opcional)' placeholder='Insira o Seller Id no iHub (opcional) ' fullWidth />
                 
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