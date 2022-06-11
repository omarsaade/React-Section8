//meth 2 - the best meth after usereducer

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
    console.log('EFFECT RUNNING');//1firsttime     second //2

    return () => {
      console.log('EFFECT CLEANUP'); //when unmout this line only with line 42 will run 
    }
  }, []);


  // Because now this function here is executed by react
  // and it is executed after important,
  //     after every component re - evaluation.
  // So whenever this component function ran thereafter,
  //     this will run.
  // And if you then update the state in here
  // the component will run again.
  //


  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity!"); //3 first , second    //3
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 1000);

    return () => {
      console.log('CLEANUP');//2  fisrt  , second    //1
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




/////////////////////

// meth 3 

// import React, { useState } from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';

// const Login = (props) => {
//   const [enteredEmail, setEnteredEmail] = useState(''); //email
//   const [emailIsValid, setEmailIsValid] = useState(); //onblur true 
//   const [enteredPassword, setEnteredPassword] = useState('');//password
//   const [passwordIsValid, setPasswordIsValid] = useState();//onblur true 
//   const [formIsValid, setFormIsValid] = useState(false); // true form validation




//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value); //bt7et email

//     setFormIsValid(
//       event.target.value.includes('@') && enteredPassword.trim().length > 6
//     );

//   };


//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);//bt7et password

//     setFormIsValid(
//       enteredEmail.includes('@') && event.target.value.trim().length > 6
//     );
//   };





//   // The onblur event occurs when an object loses focus.
//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes('@')); //b3at el email
//   };



//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length > 6);
//   };





//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onLogin(enteredEmail, enteredPassword);
//   };



//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
//           <label htmlFor="email">E-Mail</label>
//           <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
//         </div>
//         <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
//           <label htmlFor="password">Password</label>
//           <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>Login</Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
///////////////////////////////////////


