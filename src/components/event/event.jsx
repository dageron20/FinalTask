import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { task, user } from "../../store";
import { observer, useStaticRendering } from "mobx-react-lite";


const Event = observer(() => {
    //ид задачи

    const [userList, setUserList] = useState({});

    useEffect(() => {
        if (!userList[0]) {
            user.allUsersFetch().then(() => setUserList(user.allUsers))
        }
    })





    console.log(userList);


    return (
        <form className="board__form">
            <div className="board__form-data">

                <label htmlFor="user" className='taskPage-title'>Исполнитель</label>
                <select name="assignedId">
                    <option disabled selected>Исполнитель</option>
                
                </select>

            </div>


        </form>
    )
});

export default Event;
