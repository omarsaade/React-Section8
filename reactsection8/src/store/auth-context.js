import React, { useState, useEffect } from 'react';

//AuthContext is an object that contain a component
// This default value will actually only be used if we would consume without having a provider.
const AuthContext = React.createContext({
    isLoggedIn: false,//default value
    onLogout: () => { },
    onLogin: (email, password) => { }
});





export const AuthContextProvider = (props) => { //named export

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

        if (storedUserLoggedInInformation === '1') {
            setIsLoggedIn(true);
        }
    }, []);



    const loginHandler = () => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };




    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };




    return <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}>
        {props.children}
    </AuthContext.Provider >


}





export default AuthContext; //default export

