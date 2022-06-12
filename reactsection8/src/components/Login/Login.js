import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';


//function reducer
const emailReducer = (state, action) => {
  // console.log(state); // {value: 'omar111saadeh@hotmail.com', isValid: true}
  if (action.type === 'USER_INPUT') {
    // {value : omarsaadeh11@gmail.com , isValid: true}
    return { value: action.val, isValid: action.val.includes('@') };

  }

  if (action.type === 'INPUT_BLUR') {
    // {value : omarsaadeh11@gmail.com , isValid: true}
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
}

////////////////////////////////////////////////////////////////////

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.trim().length > 6 };

  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: '', isValid: false };
}

//////////////////////////////////////////////////////////

const Login = (props) => {

  const [formIsValid, setFormIsValid] = useState(false);


  //btebda intial state hik
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });


  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });




  // lama tektob
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    // console.log(event.target.value);

    setFormIsValid(
      event.target.value.includes('@') && passwordState.isValid
    );
  };



  //small change
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };



  //change
  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };



  //nothing change
  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };


  //emailState.value
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };




  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ''
            }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
