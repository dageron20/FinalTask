import React from 'react';

import Header from '../../components/header/header';
import Title from '../../components/title/title';
import { observer } from 'mobx-react-lite';
import UserList from '../../components/userList/userList';

const Users = observer(() => {

  return (
    <>
      <Header />

      <section className="main-container">
        <Title />
        <UserList />

      </section>
    </>

  )
});

export default Users;