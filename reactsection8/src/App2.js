import React, { useState, Fragment, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App2() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);



  // Because now this function here is executed by react
  // and it is executed after important,
  //     after every component re - evaluation.
  // So whenever this component function ran thereafter,
  //     this will run.
  // And if you then update the state in here
  // the component will run again.


  useEffect(() => {
    // console.log("hello");
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === '1') {
      // console.log("hello");
      setIsLoggedIn(true);
      // console.log("hello");
    }

  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);

  };

  //for two
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');

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







// import React, { useEffect, useState } from 'react';
// import { render } from 'react-dom';
// //===================================
// const myContainerStyle = {
//   maxWidth: '360px', margin: '5px auto 0',
//   padding: '5px 0 5px', backgroundColor: '#ddd',
//   textAlign: 'center', border: '1px solid #000',
//   fontSize: '16px', fontFamily: 'Helvetica'
// };
// const myButtonStyle = {
//   margin: '0', padding: '4px 10px',
//   backgroundColor: '#fff', border: '1px solid #000',
//   borderRadius: '10px', font: 'inherit',
//   cursor: 'pointer', outline: 'none'
// };
// const mySpacerStyle = { margin: '5px 0' };
// //===================================
// const MyCleanUpMessageComponent = () => (   //8888888888888888888888888888
//   <b>Cleanup completed</b>
// );
// //===================================
// function MyUseEffectComponent() {
//   useEffect(
//     () => {
//       console.log('useEffect');////////////////////////////////////
//       return () => {
//         console.log('Cleanup function');///////////////////////
//       };
//     },
//     []
//   );
//   //---------------------------------///888888888888888888888888888888
//   return (
//     <div>
//       <b>useEffect Component</b>
//     </div>
//   );
// };
// //===================================
// function MyApp2() {
//   const [myBoolean, setMyBoolean] = useState(true);
//   const myBooleanHandler = () => {
//     setMyBoolean(myPrevBoolean => !myPrevBoolean);
//   };
//   //---------------------------------
//   console.log('MyApp component');/////////////////////////////////////
//   return (
//     <div style={myContainerStyle}>
//       See the console
//       <br />
//       Sparsely, click the button multiple times
//       <hr style={mySpacerStyle} />
//       <button
//         type="button"
//         onClick={myBooleanHandler}
//         style={myButtonStyle}
//       >
//         {myBoolean
//           ? 'Unmount component'
//           : 'Mount component'}
//       </button>
//       <hr style={mySpacerStyle} />
//       <div>
//         {myBoolean
//           ? <MyUseEffectComponent />
//           : <MyCleanUpMessageComponent />}
//       </div>
//     </div>
//   );
// }
// // render(<MyApp2 />, document.getElementById('root'));

// export default MyApp2;