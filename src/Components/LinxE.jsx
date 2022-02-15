import React, { useState, useCallback, useRef } from 'react';
import { Grid, Paper, TextField, Button} from '@material-ui/core';
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export default function LinxE() {
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
  const fieldSenha = senhaRef.current.value
  const fieldVitrine = vitrineRef.current.value
  console.log(urlRef.current.value)
  if( !fieldUrl || !fieldUser || !fieldSenha || !fieldVitrine){
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
 const senhaRef = useRef(null)
 const vitrineRef = useRef(null)

    const paperStyle={padding :20,height:'70vh',width:500, margin:"20px auto"}
    const btnstyle={margin:'8px 0'}

  return (
    <Grid>
 <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>Integração Linx Emillenium</h2>
                </Grid>
                <TextField  
                inputRef={urlRef}
                label='URL' placeholder='Insira a URL da Loja (http://dominio.com.br:PORTA)' fullWidth required/>
                <TextField  
                inputRef={userRef}
                label='Usuário de Acesso' placeholder='Insira o Usuário de Acesso ao WebService da E-Millenium ' fullWidth required/>
                <TextField 
                inputRef={senhaRef}
                label='Senha de Acesso' placeholder='Insira a password de Acesso ao WebService da E-Millenium' type='password' fullWidth required/>
                <TextField 
                inputRef={vitrineRef}
                label='Vitrine da Loja E-millenium' placeholder='Insira a vitrine da loja E-millenium onde se encontram os dados da integração' fullWidth required/>
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