import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Tiny() {

  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
const onTextChange = (e ) => setTextValue(e.target.value);
const handleSubmit = useCallback(() => {
  const fieldToken = tokenRef.current.value
  const fieldEcommerce = ecommerceRef.current.value
  console.log(tokenRef.current.value)
  if( !fieldToken || !fieldEcommerce ){
    setMessage("Verifique se os campos estão preenchidos!")
    setType("error")
    setOpen(true)
  return 
  }
  setMessage("Enviado com sucesso")
  setType("success")
  setOpen(true)
},[]);

 const tokenRef = useRef(null)
 const ecommerceRef = useRef(null)



    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Tiny</h2>
                </Grid>
                <TextField 
                inputRef={tokenRef}
                label='Token de acesso' placeholder='Insira o token de acesso do Tiny ' fullWidth required/>
                <TextField 
                inputRef={ecommerceRef}
                label='Id Ecommerce' placeholder='Insira o Id Ecommerce para criação de pedidos (opcional)' fullWidth/>


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