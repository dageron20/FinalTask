import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '../../pages/login/login';
import { user } from '../../store';
import Notfound from '../../pages/notfound/notfound';
import { AppRoute } from '../../const';
import TaskList from '../../pages/taskList/taskList';
import { observer } from 'mobx-react-lite';
import Form from '../../pages/form/form';
import Users from '../../pages/users/users';
import CurTask from '../../pages/curTask/curTask';

const App = observer(() => {

  const cashUser = localStorage.getItem('IdUser');
  if (cashUser) {
    user.userId(cashUser);
  }

  return (
    <BrowserRouter>
      {cashUser ?
        <Switch>
          <Route path='/' exact>
            <TaskList />
          </Route>
          <Route path={AppRoute.USERS} exact>
            <Users />
          </Route>
          <Route path={AppRoute.TASK}>
            <CurTask />
          </Route>
          <Route path={AppRoute.EDITTASK}>
            <Form />
          </Route>
          <Route component={Notfound}>
          </Route>
        </Switch>
        :
        <Route >
          <Login />
        </Route>

      }
    </BrowserRouter>
  )
});

export default App;
