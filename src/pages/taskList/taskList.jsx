import React from 'react';
import './taskList.scss';
import Header from '../../components/header/header';
import Title from '../../components/title/title';
import Board from '../../components/board/board';
import { task } from '../../store';
import { observer } from 'mobx-react-lite';

const TaskList = observer(() => {
    return (
        <>
            <Header  />
            <section className="main-container">
                <Title />
                <Board tasks={task.filtredData} />
            </section>
            
        </>
    )
});

export default TaskList;