import React, { useState } from 'react';
import './App.css';
import Form from './components/Form'

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  toS: false,
}

const initialUsers = []

function App() {
  
  const [friends, setFriends] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)

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
      />
    </div>
  );
}

export default App;
