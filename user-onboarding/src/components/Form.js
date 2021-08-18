import React from 'react'

export default function Form(props) {

    const { values, submit, change } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }

    return(
        <form onSubmit={onSubmit}>
            <label>Username:
                <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                />
            </label>
            <label>Password:
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
            </label>
            <label>Email:
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
           </label>
           <label>Terms of service:
                <input 
                    type="checkbox"
                    name="toS"
                    checked={values.toS}
                    onChange={onChange}
                />
          </label>
          <button>submit</button>
        </form>
    )
}