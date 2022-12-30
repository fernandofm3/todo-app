import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import { Redirect } from 'react-router-dom'
import * as S from './styles';
import api from '../../services/api';

//NOSSOS COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';

//Imagens
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

//let params = useParams();
//console.log(params);


//{ id="6181d1eb3fb82d0016a52f65"  }

function Task() {
  const [type, setType] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const {id} = useParams();
  
  async function LoadTaskDetails() {

      //end point      
      api.get('/task/' + id).then(response=>{

        function getDate(date) {
          const moment = require('moment');
          //return moment(date).format('DD/MM/YYYY - HH:mm');
          return moment(date).format('YYYY-MM-DD');
        }  
        
        function getTime(time) {
          const moment = require('moment');
          //return moment(date).format('DD/MM/YYYY - HH:mm');
          return moment(time).format('HH:mm');
        }
        
        //console.log(response.data);
        setType(response.data.type);
        setDone(response.data.done);
        setTitle(response.data.title);
        setDescription(response.data.Description);        
        setDate(getDate(response.data.when));        
        setHour(getTime(response.data.when));        
    }) 
  }


  useEffect(() => {
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>   
      <Header />
      <S.Form>
        {/* <h3>{type} {done} {title} {description} {date} {hour} </h3> */}
        <S.TypeIcons>
          {
            TypeIcons.map((icon, index) => (
              index > 0 &&
              <button key={index} type="button">
                <img src={icon} alt="Tipo da Tarefa"
                  className={type && type != index && 'inative'} />
              </button>
            ))
          }
        </S.TypeIcons>

        <S.Input>
          <span>Título</span>
          <input type="text" placeholder="Título da terefa..."
            value={title} />
        </S.Input>

        <S.TextArea>
          <span>Descrição</span>
          <textarea rows={5} placeholder="Detalhes da tarefa..."
          value={description} />
        </S.TextArea>

        <S.Input>
          <span>Data</span>
          <input type="date" placeholder="Título da terefa..."
          value={date} />
          <img src={iconCalendar} alt="Calendário" />
        </S.Input>

        <S.Input>
          <span>Hora</span>
          <input type="time" placeholder="Título da terefa..."
          value={hour} />
          <img src={iconClock} alt="Relógio" />
        </S.Input>

        <S.Options>
          <div>
            <input type="checkbox" checked={done} />
            <span>CONCLUÍDO</span>
          </div>
          {id && <button type="button">EXCLUIR</button>}
        </S.Options>

        <S.Save>
          <button type="button">SALVAR</button>
        </S.Save>

      </S.Form>
      <Footer />
    </S.Container>
  )
}

export default Task;
