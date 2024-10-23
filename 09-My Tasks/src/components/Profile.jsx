import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
const Profile=()=>{
    
const {user,logout}=useContext(AuthContext)

return(
    <>
     <div>
            {user ? (
                <>
                    <h1>Welcome, {user.email}!</h1>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <h1>Please log in</h1>
            )}
        </div>
    </>
)
}

export default Profile