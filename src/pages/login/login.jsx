import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/header';
import './login.scss';
import { observer } from 'mobx-react-lite';
import { user } from '../../store';
import { AppRoute } from '../../const';

const Login = observer(() => {

  const [form, setForm] = useState({
    'login':'',
    'password':''
  })
  const handleForm = (evt) =>{
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value})
  }

  const takeLogin = (evt) => {
    evt.preventDefault();
    user.userLogin(form).then(() => document.location.href = AppRoute.MAIN);
  }
 

  return (
    <>
      <Header />
      <section className='container-login'>
        <section className='login-form'>
            <form className='form-inner' onSubmit={takeLogin}>
                <h3>Авторизация</h3>
                <label className='label-name' htmlFor='login' >Логин</label>
                <input type='text' name='login' value={form.login} onChange={handleForm} placeholder='username@e.mail' />
                <label className='label-name' htmlFor='passowrd'>Пароль</label>
                <input type="password" name='password' value={form.password} onChange={handleForm} placeholder='*******' />
                <button className='btn' type='sumbit' >Вход</button>   
            </form>
        </section>
      </section>
      
    </>

  )
});

export default Login;
