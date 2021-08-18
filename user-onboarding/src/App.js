import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import Form from './components/Form'
import Users from './components/User';
import schema from './validation/formSchema';
import axios from 'axios'

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
  const [ formErrors, setFormErrors ] = useState(initialFormErrors)
  const [ disabled, setDisabled ] = useState(initialDisabled)


  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUsers([...users, res.data])
    })
    .catch(err => {
      console.error(err)
    })
    .finally(() => {
      setFormValues(initialFormValues)
    })
  }

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      toS: ['toS'].filter(tos => !!formValues[tos]),
    }
    postNewUser(newUser)
  }

  useEffect((users) => {
    schema.isValid(users)
    .then(valid => setDisabled(!valid))
  }, [formValues])



  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <h1>User list</h1>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {
      users.map(user => {
        return ( 
        <Users key={user.id} users={user}
        />
        )
      })
      }
    </div>
  );
}

export default App;
