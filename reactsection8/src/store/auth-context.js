import React from 'react';

//AuthContext is ana object that contain a component
const AuthContext = React.createContext({
    isLoggedIn: false //default value
});

export default AuthContext;