import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'
import Users from './components/User';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  toS: false,
}

const initialUsers = []
const initialDisabled = true

function App() {
  
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [disabled, setDisabled] = useState(initialDisabled)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newFriend = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      toS: formValues.toS

    }

  }

  return (
    <div className="App">
      <h1>Test</h1>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      />
      {
        users.map((users, index) => {
          return (
            <Users key={index} users={users}/>
          )
        })
      }
    </div>
  );
}

export default App;
