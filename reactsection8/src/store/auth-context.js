import React from 'react';

//AuthContext is an object that contain a component
// This default value will actually only be used if we would consume without having a provider.
const AuthContext = React.createContext({
    isLoggedIn: false //default value
});

export default AuthContext;

// This default value will actually only be used if we would consume without having a provider.