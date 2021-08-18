import React from 'react'

export default function Form(props) {

    const { values, submit, change, disabled, errors } = props

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
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a user</h2>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
             </div>
             <div className='form-group inputs'>
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
                        type='password'
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
           </div>
           <div className='form-group checkboxes'>
            <label>Terms of service:
                    <input 
                        type="checkbox"
                        name="toS"
                        checked={values.toS}
                        onChange={onChange}
                    />
            </label>
          </div>
          <button disabled={disabled}>submit</button>
        </form>
    )
}
