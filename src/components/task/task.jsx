import React, { useState } from 'react';
import './task.scss';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AppRoute } from '../../const';
import { observer } from 'mobx-react-lite';
import { task, user } from '../../store';



const Task = observer(({ id, userId, assignedId, title, description, type, dateOfCreation, dateOfUpdate, timeInMinutes, status, rank, userList }) => {
    const location = useLocation()


    const [dropmenu, setdropmenu] = useState()
    const activeDropMenu = () => {
        setdropmenu(!dropmenu);
    }

    const changeStatus = (evt) => {
        task.changeStatus(id, evt.target.value);
        setdropmenu(false);
    }
    const deleteTask = () => {
        task.deleteTask(id);
        setdropmenu(false);
    }


    return (
        <div className="task" >
            <div className="task__container">
                <div className="task--logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" fill={`${type !== "bug" ? "#00D1FF" : "#EB4F4F"}`} />
                        <circle cx="12" cy="12" r="6" fill="white" />
                    </svg>
                </div>
                <div className="task__name">
                    <Link to={`/task/${id}`}>
                        {title}
                    </Link>
                </div>

                {location.pathname === AppRoute.MAIN &&
                    <div className="task__owner">
                        {assignedId}
                    </div>
                }
                <div className={`task__status stat-${status}`} >
                    {status}
                </div>

                <div className={`task__priority rank-${rank}`}>{rank}</div>

                <div className="task__btn">
                    <div className="dropdown">
                        <p className={`dropdown-btn ${(dropmenu === true) && "btn-active"}`} onClick={activeDropMenu} >
                            <span> &#9776;</span>
                        </p>
                        <div className={`dropdown-content ${(dropmenu === true) && "activated"}`}  >

                            <Link
                                type="text"
                                className="dropdown-content-item"
                                to={AppRoute.MAIN}
                            >
                                Редактировать
                            </Link>

                            <button
                                className="dropdown-content-item delete"
                                onClick={deleteTask}
                            >
                                Удалить
                            </button>
                            {(status === "opened") &&
                                <button
                                    className="dropdown-content-item"
                                    value={"inProgress"}
                                    onClick={changeStatus}
                                >
                                    Взять в работу
                                </button>
                            }
                            {(status === "inProgress" || status === "testing" || status === "complete") &&
                                <button
                                    className="dropdown-content-item"
                                    value={"opened"}
                                    onClick={changeStatus}
                                >
                                    Переоткрыть
                                </button>
                            }
                            {(status === "inProgress") &&
                                <button
                                    className="dropdown-content-item"
                                    value={"testing"}
                                    onClick={changeStatus}
                                >
                                    На тестирование
                                </button>
                            }
                            {(status === "inProgress" || status === "testing") &&
                                <button
                                    className="dropdown-content-item"
                                    value={"complete"}
                                    onClick={changeStatus}
                                >
                                    Готово
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Task;
