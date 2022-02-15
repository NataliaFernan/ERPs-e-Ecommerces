import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Cards from './Cards/Cards'
import Forms from './pages/Forms'

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" exact element={<Cards/>}/>
        <Route path="/forms/:nomeEmpresa" element={<Forms/>}/>
      </Routes>
    </Router>
  )
}