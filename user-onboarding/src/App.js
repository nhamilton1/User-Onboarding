import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form'
import Users from './components/User';
import formSchema from './validation/formSchema';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  toS: false,
}

const initialFormErrors = {
  username: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
  
  const [ users, setUsers ] = useState(initialUsers)
  const [ formValues, setFormValues ] = useState(initialFormValues)
  const [ errors, setErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)

  // const setFormErrors = (name, value) => {
  //   yup.reach(formSchema, name).validate(value)
  //     .inputChange(() => setErrors({...errors, [name]: ''}))
  //     .catch(err => setErrors({...errors, [name]: err.errors[0] }))
  // }

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

  // useEffect(() => {
  //   schema.isValid(users)
  //   .then(valid => setDisabled(!valid))
  // }, [users])

  return (
    <div className="App">
      <h1>Test</h1>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      // setFormErrors={setFormErrors}
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
