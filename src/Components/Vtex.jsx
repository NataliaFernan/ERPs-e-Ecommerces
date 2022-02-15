import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Vtex() {

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
  const fieldKey = keyRef.current.value
  const fieldToken = tokenRef.current.value
  const fieldSeller = sellerRef.current.value
  const fieldPol = polRef.current.value
  console.log(urlRef.current.value)
  if( !fieldUrl || !fieldKey || !fieldToken || !fieldSeller || !fieldPol){
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
 const keyRef = useRef(null)
 const tokenRef = useRef(null)
 const sellerRef = useRef(null)
 const polRef = useRef(null)

    const paperStyle={padding :20,height:'70vh',width:550, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Vtex</h2>
                </Grid>
                <TextField 
                inputRef={urlRef}
                label='URL do site' placeholder='Insira a URL no formato https://DOMINIO.vtexcommercestable.com.br' fullWidth required/>
                <TextField 
                inputRef={keyRef}
                label='APP Key' placeholder='Insira a App Key da Vtex' type='password' fullWidth required/>
                <TextField 
                inputRef={tokenRef}
                label='APP Token' placeholder='Insira o APP token da Vtex' fullWidth required/>
                <TextField 
                inputRef={sellerRef}
                label='Id do seller' placeholder='Insira o Id do seller' fullWidth required/>
                <TextField 
                inputRef={polRef}
                label='Id política comercial' placeholder='Insira o Id da política comercial' fullWidth required/>


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