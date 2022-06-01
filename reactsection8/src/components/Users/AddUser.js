import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");



    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }

        if (+enteredAge < 1) {
            return;//return statement finish the function excution,,yaane malah yeshtegel shi men baado
        }

        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };


    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }




    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }







    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
                <label htmlFor='age'>Age (Years)</label>
                <input id='age' type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser; 