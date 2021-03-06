import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const AddUser = (props) => {
    //it retun an array of object with a "cuurent " property
    //for reading value , ref is propably better.
    const nameInputRef = useRef();//its only usable inside of our functional component
    const ageInputRef = useRef();//undefined iza fadye () 
    const [error, setError] = useState();


    //refffffffffffffffffffff is uncontrolled input component.




    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;
        // console.log(enteredName);
        // console.log(enteredUserAge);
        if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'please enter a valid name and age (non-empty values).'
            });
            return;
        }


        if (+enteredUserAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'please enter a valid age (>0).'
            });
            return;//return statement finish the function excution,,yaane malah yeshtegel shi men baado
        }


        props.onAddUser(enteredName, enteredUserAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';

    };




    const errorHandler = () => {
        setError(null);// null is treated as a falsy value
    }


    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input ref={nameInputRef} id='username' type="text" ></input>
                    <label htmlFor='age'>Age (Years)</label>
                    <input ref={ageInputRef} id='age' type="number" ></input>
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser; 