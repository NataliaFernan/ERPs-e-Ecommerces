import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Ecoys() {

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
  const fieldSecret = secretRef.current.value
  const fieldDomi = domiRef.current.value
  console.log(urlRef.current.value)
  if( !fieldUrl || !fieldKey || !fieldSecret || !fieldDomi){
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
 const secretRef = useRef(null)
 const domiRef = useRef(null)


  const handleReset = () => setTextValue("");
    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Eccoys</h2>
                </Grid>
                <TextField  
                inputRef={urlRef}
                 label='URL da loja Eccoys' placeholder='Insira a URL da loja Eccoys ' fullWidth required/>
                <TextField  
                inputRef={keyRef}
                label='Api Key de Acesso' placeholder='Insira a Api Key de Acesso ao WebService da Eccosys ' fullWidth required/>
                <TextField 
                inputRef={secretRef}
                label='Secret Key de Acesso' placeholder='Insira a Secret Key de Acesso ao WebService da Eccosys ' fullWidth required/>
                <TextField  
                inputRef={domiRef}
                label='URL/Dominio do seu ecommerce' placeholder='Insira a URL/Dominio do seu ecommerce' fullWidth required/>
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