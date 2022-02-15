import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Magento2() {

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
  const fieldUrl = urlRef.current.value
  console.log(tokenRef.current.value)
  if( !fieldToken || !fieldUrl){
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
 const urlRef = useRef(null)



  const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}
  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Magento2</h2>
                </Grid>
                <TextField 
                 inputRef={tokenRef}
                label='Token Magento 2' placeholder='Insira o token do Magento 2' fullWidth required/>
                <TextField
                inputRef={urlRef} 
                label='URL' placeholder='Insira a URL do site ' fullWidth required/>


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