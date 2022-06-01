import React from 'react';
import './Listo.css'


const Listo = (props) => {
    return (
        <li className='li'>{props.children}</li>
    );
}

export default Listo;