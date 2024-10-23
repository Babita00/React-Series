import AuthContextProvider from "./context/AuthContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
import './App.css'

function App() {
  

  return (
    <AuthContextProvider>
    <Login/>
    <Profile/>
    </AuthContextProvider>
  )
}

export default App
