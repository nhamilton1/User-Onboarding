import React from 'react'

export default function Users (props) {
    const { users } = props
    return (
        <div className='friend container'>
            <h2>{users.username}</h2>
            <p>Email: {users.email}</p>
        </div>
    )
}
