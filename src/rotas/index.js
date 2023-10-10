import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/Home';
import AgendamentoRealizado from '../views/AgendamentoRealizado';

export default function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/agendamentorealizado'  element={<AgendamentoRealizado/>}/>
      </Routes>
    </BrowserRouter>
  )
}