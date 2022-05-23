import React from 'react';
import DropDownMenu from '../dropdownmenu/dropdownmenu';
import './board.scss';
import { task, user } from '../../store';
import { useEffect, useState } from 'react';
import Task from '../task/task';
import { observer } from 'mobx-react-lite';




const Board = observer(({ tasks }) => {

    const [userList, setUserList] = useState([...user.allUsers]);
    if (!userList.length) {
        useEffect(() => {
            user.allUsersFetch().then(() => setUserList(user.allUsers))
        })
    }

    return (
        <>
            <section className="page">
                <div className="page_filter">
                    <DropDownMenu />
                </div>
                <section className="board-tasks">
                    {
                        tasks ?
                            tasks.map(event => <Task {...event} key={event.id} events={tasks} userList={userList} />)
                            :
                            <span>Not found</span>
                    }
                </section>

            </section>
        </>
    );
});

export default Board;
