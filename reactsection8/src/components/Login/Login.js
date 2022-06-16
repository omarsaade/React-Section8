import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


// function reducer 1
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };

  }

  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }

  return { value: '', isValid: false };
}



////////////////////////////////////////
//function reducer 2
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

  /////////////////////////////////////

  const authCtx = useContext(AuthContext);







  //object descructuring syntax
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  //const isValid = emailState.isValid;










  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity!"); //3 first , second    //3
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 1000);

    return () => {
      console.log('CLEANUP');//2  fisrt  , second    //1
      clearTimeout(identifier);
    };

  }, [emailIsValid, passwordIsValid]);







  // lama tektob
  const emailChangeHandler = (event) => {
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });

  };




  //small change
  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });

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
    authCtx.onLogin(emailState.value, passwordState.value);
  };




  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler} />

        <Input
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler} />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
