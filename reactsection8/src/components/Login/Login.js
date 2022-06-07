import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); //email
  const [emailIsValid, setEmailIsValid] = useState(); //onblur true 
  const [enteredPassword, setEnteredPassword] = useState('');//password
  const [passwordIsValid, setPasswordIsValid] = useState();//onblur true 
  const [formIsValid, setFormIsValid] = useState(false); // true

  useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    }
  }, []);





  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("2 checking for validity!");
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 1000);

    return () => {
      console.log('1 Cleanup');
      clearTimeout(identifier);
    };

  }, [enteredEmail, enteredPassword]);






  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value); //bt7et email
  };



  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);//bt7et password
  };




  //onBlur
  //check on the email
  // The onblur event occurs when an object loses focus.
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@')); //b3at el email
  };


  //check length of the password
  //password
  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };


  //awalan prevent default / send Password and email
  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };



  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
