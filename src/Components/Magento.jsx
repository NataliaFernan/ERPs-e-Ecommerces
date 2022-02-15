import React, { useRef, useState, useCallback } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function Magento() {
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
  const fieldUser = userRef.current.value
  const fieldKey = keyRef.current.value
  const fieldIdent = identRef.current.value
  const fieldIdentl = identlRef.current.value
  console.log(urlRef.current.value)
  if( !fieldUrl|| !fieldUser || !fieldKey|| !fieldIdent || !fieldIdentl){
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
 const userRef = useRef(null)
 const keyRef = useRef(null)
 const identRef = useRef(null)
 const identlRef = useRef(null)


  const paperStyle={padding :20,height:'70vh',width:550, margin:"20px auto"}
  const btnstyle={margin:'8px 0'}
  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Magento</h2>
                </Grid>
                <TextField 
                inputRef={urlRef}
                label='URL do Magento' placeholder='Exemplo (http://www.dominiodaloja.com.br/api/soap/index/) ' fullWidth required/>
                <TextField 
                inputRef={userRef}
                label='User Id' placeholder='Insira o user ID de acesso ao webservice Magento' fullWidth required/>
                <TextField 
                inputRef={keyRef}
                label='API Key' placeholder='Insira a API Key do Magento ' fullWidth required/>
                <TextField 
                inputRef={identRef}
                label='Identificador do Site' placeholder='Insira o identificador do site do Magento (websiteId)' fullWidth required/>
                <TextField 
                inputRef={identlRef}
                label='Identificador da loja' placeholder='Insira o identificador da loja do Magento (storeview) ' fullWidth required/>

                
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