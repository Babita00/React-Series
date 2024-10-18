import { useContext,useState } from "react"
import userContext from "../context/userContext"

function Login() {

    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    const {setUser}=useContext(userContext) //setUser from UserContext provider
    const handleSubmit=()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="username"/>
        <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="password"/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login