import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from '../views/Home';
import AgendamentoRealizado from '../views/AgendamentoRealizado';
import Agendamento from '../views/Agendamento';
import Autenticar from '../views/Autenticar'

export default function Rotas(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/login'  element={<Autenticar/>} />
        <Route path='/'                      element={<Home/>} />
        <Route path='/agendarexame'          element={<Agendamento/>} />
        <Route path='/agendamentorealizado'  element={<AgendamentoRealizado/>} />
      </Routes>
    </BrowserRouter>
  )
}