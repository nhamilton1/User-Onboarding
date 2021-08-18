import React from 'react'

export default function Users (props) {
    const { users } = props
    return (
        <div>
            <h2>{users.username}</h2>
            <p>Email: {users.email}</p>
            <p>Role: {users.role}</p>
            <p>Civil: {users.civil}</p>
        </div>
    )
}