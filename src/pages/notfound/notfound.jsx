import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
            <h3>
                404 PAGE NOT FOUND
            </h3>
            <p>
                Кажется, вы заблудились...
            </p>
            <Link to='/' type='button'> 
                    Вернутся назад
            </Link>
            

        </>
    )
}

export default Notfound;