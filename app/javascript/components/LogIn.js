import React, { useState} from 'react'
import {useHistory} from 'react-router-dom'

function Auth({setCurrentUser}){
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState(null)

    const history = useHistory();

    async function handleSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }
        const res = await fetch(`/api/v1/log_in`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user})
        });
        const userData = await res.json();
        if(userData.id){
            setCurrentUser(userData)
            history.push('/')
        } else {
            setErrors(userData.message)
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
                <input
                    type="text"
                    placeholder="User Name"
                    values={username}
                    name="username"
                    onChange={(e) => setUserName(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="Password"
                    values={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                 ></input>
                <input submit type="submit" value="Login"></input>
                {errors?errors.map(error => <div>{error}</div>):null}
        </form>
    )
}
export default Auth;