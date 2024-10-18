
import { useState } from "react";
import userContext from "./userContext";
import PropTypes from 'prop-types'; 
const UserContextProvider = ({children}) => {

const [user,setUser]=useState(null)
return(
    //wrapping the component

<userContext.Provider value={{user,setUser}}>
{children}
</userContext.Provider>
)
}


UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
export default UserContextProvider