import React, { Fragment, useState } from 'react';
import AddUser from './components1/Users/AddUser';
import UsersList from './components1/Users/UsersList';



const App = () => {

    const [usersList, setUsersList] = useState([]);

    const addUserhandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: uName, age: uAge, id: Math.random().toString() },
            ];
        });
    }





    return (
        <Fragment>
            <AddUser onAddUser={addUserhandler} />
            <UsersList users={usersList} />
        </Fragment>
    );
}

export default App;

// rfce