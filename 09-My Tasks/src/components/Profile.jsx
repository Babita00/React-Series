import AuthContextProvider from '../context/AuthContextProvider'
const Profile=()=>{
const {user,logout}=AuthContextProvider()
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