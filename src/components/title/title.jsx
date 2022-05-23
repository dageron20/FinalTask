import React from 'react';
import './title.scss';
import { Link, useRouteMatch } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { observer } from 'mobx-react-lite';
import { task, user } from '../../store';

const Title = observer(() => {

  const { path } = useRouteMatch();
  const status = task.currentTask.status;
  const title = task.currentTask.title

    const location = useLocation();
    return (
        <>
        <section className='container_title'>
        {path === AppRoute.MAIN && <span className="name"> Задачи </span> }
            {path === AppRoute.TASK && <span className="name"> {title} </span>}
            {path === AppRoute.USERS && <span className="name"> Пользователи </span>}

            {location.pathname === AppRoute.MAIN &&
                <Link
                  to={`/form`}
                  type="button"
                  className="btn primary"
                >
                  Добавить задачу
                </Link>
            }
        </section>
        </>
    )
});

export default Title;
