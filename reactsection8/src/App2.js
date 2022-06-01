import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';
import './App.css';


const App = () => {


  const [Listo, setList] = useState([]);







  const loading = (Username, Age) => {
    setList(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ name: Username, age: Age, id: Math.random().toString() });
      return updatedGoals;
    });


  }

  // const blo = (mo) => {
  //   console.log(mo);
  // }


  return (
    <div className='app'>
      <Form onload={loading} />
      <List items={Listo} />
    </div>
  );
}

export default App;
