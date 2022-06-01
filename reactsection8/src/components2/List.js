import React from 'react';
import './List.css'
import Listo from './Listo';


const List = (props) => {


    const l = props.items;
    const listItems = l.map((number) =>
        // Wrong! The key should have been specified here:
        <Listo key={number.id}>{`${number.name}(${number.age} years old)`}</Listo>
    );




    return (
        <ul className='ul'>
            {listItems}
        </ul>
    );
}

export default List;