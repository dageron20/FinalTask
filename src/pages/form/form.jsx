import React from 'react';
import { useState } from 'react';
import Header from '../../components/header/header';
import './form.scss';
import { observer } from 'mobx-react-lite';
import { task, user } from '../../store';
import { AppRoute } from '../../const';
import Event from '../../components/event/event';
import Title from '../../components/title/title';

const Form = observer(() => {

    return (
        <>
            <Header />
            <section className="main-container">
                <Title />
                <Event />
            </section>

        </>

    )
});

export default Form;
