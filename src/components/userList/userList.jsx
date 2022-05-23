import React from 'react';
import './userList.scss';
import { user } from '../../store';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import Title from '../title/title';

const UserList = observer(() => {

    const usersList = [...user.data]

    return (
        <>
            <section className="page">
                <section className="board-tasks">
                    {usersList.map(item => <div className="userItem" key={item.id}><Link to={`/profile/${item.id}`}>{item.username}</Link></div>)}
                </section>

            </section>
        </>
    )
});

export default UserList;
