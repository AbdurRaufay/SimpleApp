import React,{useState} from 'react'
import axios from 'axios'
import  {useHistory}  from 'react-router-dom'
const Login = () => {
    const history=useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")

    const subRegister = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post("http://localhost:3001/user/login", {
                email: email,
                password: password
            })
            setToken(data)
            history.push({
                pathname:'/',
                state:data
            })
        }
        catch (error) {
            setToken(error)
        }
    }
    return (
        <div>
             <div>
            <form className="ui form" onSubmit={e => subRegister(e)}>
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
                <button className="ui button" type="submit">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login
