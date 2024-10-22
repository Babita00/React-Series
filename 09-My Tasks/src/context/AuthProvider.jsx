
import { useState, useEffect } from "react";
import authContext from "./AuthContext";
import PropTypes from 'prop-types'; 


const AuthContext =({children})=>{
  const [user,setUser]=useState(null)

  const login=(userData)=>{
    setUser(userData)
  }

  const logout=()=>{
    setUser(null)
  }

  useEffect(() => {
    if (user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
}, [user]);


  return(
    <authContext.Provider value={{user,login,logout}}>
      {children}
    </authContext.Provider>
  )

}

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default AuthContext