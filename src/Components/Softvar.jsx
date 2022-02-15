import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, Snackbar } from '@mui/material'


export default function Softvar() {
  const [textValue, setTextValue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState(null);
  const [message, setMessage] = React.useState(null);
  const handleClose = (event, reason) => {
    setOpen(false);
};
  const onTextChange = (e ) => setTextValue(e.target.value);
  const handleSubmit = useCallback(() => {
    const fieldApi = apiRef.current.value
    const fieldUser = userRef.current.value
    const fieldLoja = lojaRef.current.value
    const fieldEstoque = estoqueRef.current.value
    console.log(apiRef.current.value)
    if( !fieldApi || !fieldUser || !fieldLoja|| !fieldEstoque){
      setMessage("Verifique se os campos estão preenchidos!")
      setType("error")
      setOpen(true)
    return 
    }
    setMessage("Enviado com sucesso")
    setType("success")
    setOpen(true)
  },[]);

   const apiRef = useRef(null)
   const userRef = useRef(null)
   const lojaRef = useRef(null)
   const estoqueRef = useRef(null)

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Softvar</h2>
                </Grid>
                <TextField 
                inputRef={apiRef} label='API Key' placeholder='Insira a API Key da Softvar' fullWidth required/>
                <TextField 
                inputRef={userRef} label='User ID' placeholder='Insira o user ID da Softvar' fullWidth required/>
                <TextField 
                inputRef={lojaRef} label='Id da loja' placeholder='Insira Id da loja para efetuar carga de produtos' fullWidth required/>
                <TextField 
                inputRef={estoqueRef} label='Id da loja para efetuar atualizações de estoque' placeholder='Insira o Id da loja para efetuar atualizações de estoque' fullWidth required/>


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