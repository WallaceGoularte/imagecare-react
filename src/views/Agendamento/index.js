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
  const [nomes, setNomes] = useState([]);
  const [medicos, setMedicos] = useState([]);
  const [horas, setHoras] = useState([]);

  async function carregarExames() {
    await api.get(`/exame/nomes`).then(response => {
      setNomes(response.data)
    })
  }

  async function carregarMedicos() {
    await api.get(`/medico`).then(response => {
      setMedicos(response.data)
    })
  }

  async function carregarHoras() {
    await api.get(`/medico/horas`).then(response => {
      setHoras(response.data)
    })
  }

  async function Salvar() {
    if(!exame || !data || !hora) {
        return alert("Campo Obrigatório vazio.")
    }

    await api.post(`/agendamento`, {
      exame,
      medico,
      data: `${data}T${hora}`

    }).then(() =>
            alert('Exame agendado com sucesso!')
    )
  }

  useEffect(() => {
    carregarExames();
    carregarMedicos();
    carregarHoras();
  }, [])
  
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
          <S.Select value={exame} onChange={e => setExame(e.target.value)}>
            <option value="">Selecionar Exame</option>
            {
              nomes.map(nome => (
              <option >
                {nome}
              </option>
            ))}
            
          </S.Select>

          <S.Input>
              <span>Médico</span>
          </S.Input>
          <S.Select value={medico} onChange={e => setMedico(e.target.value)}>
            <option value="">Selecionar Médico (a)</option>
            {
              medicos.map(medi => (
              <option >
                {medi.nome}
              </option>
            ))}
            
          </S.Select>

          <S.Input>
              <span>Data</span>
              <input value={data} type="date" placeholder="Data"
                onChange={e => setData(e.target.value)} />
          </S.Input>
          
          <S.Spacer />

          <S.Input>
              <span>Hora</span>
          </S.Input>
          <S.Select value={hora} onChange={e => setHora(e.target.value)}>
              <option value="">Selecione Hora</option>
              {
                horas.map(h => (
                <option >
                  {h}
                </option>
              ))}
          </S.Select>

          <S.Save>
            <button type="button" onClick={Salvar} >AGENDAR</button>
          </S.Save>

      </S.Form>

      <Footer />
    </S.Container>
  );
}

export default Agendamento;
