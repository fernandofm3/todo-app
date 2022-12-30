import * as S from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function Home() {

    const [filterActived, setFilterActived] = useState('all');

    const [tasksApi, setTasksApi] = useState([]);

    function loadTasks (filterActived) {
        api.get('/task/filter/' + filterActived +  '/321654').then(response=>{
            setTasksApi(response.data);
        })
    }

    useEffect(()=>{        

        loadTasks (filterActived);      

    }, [filterActived])

    
    return (
        <S.Container>            
            <Header />

            <S.FilterArea>
                <button onClick={() => setFilterActived("all")}>
                    <FilterCard title='Todos' actived={filterActived == 'all'} />
                </button>

                <button onClick={() => setFilterActived("today")}>
                    <FilterCard title='Hoje' actived={filterActived == 'today'} />
                </button>

                <button onClick={() => setFilterActived("week")}>
                    <FilterCard title='Semana' actived={filterActived == 'week'} />
                </button>

                <button onClick={() => setFilterActived("month")}>
                    <FilterCard title='Mês' actived={filterActived == 'month'} />
                </button>

                <button onClick={() => setFilterActived("year")}>
                    <FilterCard title='Ano' actived={filterActived == 'year'} />
                </button> 
            </S.FilterArea>

            <S.Title>
                <h3>TAREFAS</h3>
            </S.Title>            
                <S.Content>
                    {                            
                        tasksApi.map(t =>
                            <TaskCard id={t._id} type={t.type} title={t.title} when={t.when} done={t.done} key={t.title + t._id} />
                        )
                    }                                
                </S.Content>                
            <Footer />
            
        </S.Container>
    )
}

export default Home;
