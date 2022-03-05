import React, { useState } from 'react'
import axios from 'axios'
const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const subRegister = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3001/user/register", {
                name: name,
                email: email,
                password: password
            })
            setMessage(data)
        }
        catch (error) {
            setMessage(error)
        }
    }
    return (
        <div>
            {message && <h1>{message}</h1>}
        <div>
            <form className="ui form" onSubmit={e => subRegister(e)}>
                <div className="field">
                    <label>Name</label>
                    <input type="text"
                        name="name"
                        value={name}
                        placeholder="name..."
                        onChange={e => setName(e.target.value)} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text"
                        name="email"
                        value={email}
                        placeholder="email...."
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="password"
                        name="password"
                        value={password}
                        placeholder="password........"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <button className="ui button" type="submit">register</button>
            </form>
        </div>
        </div>
    )
}

export default Register
