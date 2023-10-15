import React, { useState, useEffect } from "react";
import * as S from "./styles";

import api from "../../services/api";

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Agendamento() {
  const [exame, setExame] = useState();
  const [medico, setMedico] = useState();
  const [data, setData] = useState();
  const [hora, setHora] = useState();

  async function Salvar() {
    await api.post(`/agendamento`, {
      exame,
      medico,
      data: `${data}T${hora}`

    }).then(() =>
            alert('Exame agendado com sucesso!')
    )
  }
  
  return (
    <S.Container>
      <Header />
      <S.Title>
        <h3>Agendar Exames</h3>
      </S.Title>

      <S.Form>
          <S.Input>
              <span>Exame</span>
          </S.Input>
          <S.Select>
            <option value={exame || ''} onChange={e => setExame(e.target.value)}> Selecionar um Exame </option>
          </S.Select>

          <S.Input>
              <span>Médico</span>
          </S.Input>
          <S.Select>
            <option value={medico || ''} onChange={e => setMedico(e.target.value)}> Selecionar Médico (a) </option>
          </S.Select>

          <S.Input>
              <span>Data</span>
              <input value={data} type="date" placeholder="Data"
                onChange={e => setData(e.target.value)} />
          </S.Input>
          
          <S.Spacer />

          <S.Input>
              <span>Hora</span>
              <input value={hora} type="time" onChange={e => setHora(e.target.value)} />
          </S.Input>

          <S.Save>
            <button type="button" onClick={Salvar} >AGENDAR</button>
          </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Agendamento;
