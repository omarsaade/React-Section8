import React, { useState } from 'react';
import "./Form.css"
import Button from './Button';
import { useRef } from 'react';

const Form = (props) => {
    const firstRef = useRef(null);
    const lastRef = useRef(null);

    const [Username, setUsername] = useState("");
    const [Age, setAge] = useState("");




    const onUsername = (event) => {
        setUsername(event.target.value);

    }

    const onAge = (event) => {
        setAge(event.target.value);
    }






    const onSubmitHandler = (event) => {
        if (Username.length === 0 && Age.length === 0) {
            alert("Please enter a valid name and age")
            event.preventDefault();

        } else if (Age < 0) {
            alert("age should be positive");
            event.preventDefault();
        }

        else {
            props.onload(Username, Age);

            event.preventDefault();
            event.target.reset();
        }
    }




    return (
        <form className='form' onSubmit={onSubmitHandler}>
            <div>
                <p>Username</p>
                <input type="text" onChange={onUsername} ref={firstRef}></input>
                <p>Age(Years)</p>
                <input type="text" onChange={onAge} ref={lastRef} ></input>
            </div>
            <Button type="submit" >Add User</Button>
        </form>
    );
}

export default Form;