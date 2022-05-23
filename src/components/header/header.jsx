import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { user } from '../../store';


const Header = observer(() => {

  const location = useLocation();

  const [dropmenu, setdropmenu] = useState()
  const activeDropMenu = () => {
    setdropmenu(!dropmenu);
  }

    return (
      <header className="main__header">
        <Link className='logo' to={AppRoute.MAIN}>
          <img src="./img/logo.svg" alt="" />
        </Link>
        

        <nav className='main__header-menu'>
          <Link className={`toLink ${location.pathname !== AppRoute.USERS && 'toLink-active'} `} to={AppRoute.MAIN}>
            Задачи
          </Link>
          <Link className={`toLink ${location.pathname === AppRoute.USERS && 'toLink-active'} `} to={AppRoute.USERS}>
            Пользователи
          </Link>
        </nav>

        <div className="main__header-profile" onClick={activeDropMenu}>
          <p className="username">{user.UserData.username}</p>
          <div className="avatar">
            <img src="./img/avatar.jpg" alt="avatar"  />
            <div className={`dropmenu ${(dropmenu === true) && "activated"}`}  >
              <Link to={AppRoute.MAIN}>Посмотреть профиль</Link>
              <Link to={AppRoute.MAIN} className='red'>Выйти из системы</Link>
            </div>
          </div>
        </div>
      </header>
    )
});

export default Header;
