import React, { useState, Fragment, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App2() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {

    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
    console.log("hello");
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);

  };

  //for two
  const logoutHandler = () => {

    setIsLoggedIn(false);
  };



  return (
    <Fragment>


      {/* h1 text and Navigation false false */}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

      <main>
        {/* login form */}
        {!isLoggedIn && <Login onLogin={loginHandler} />}


        {/* welcome back */}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>



    </Fragment>
  );
}

export default App2;
