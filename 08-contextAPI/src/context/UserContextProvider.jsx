// Import necessary hooks and modules from React and other libraries
import { useState} from "react";
import userContext from "./UserContext"; // Importing the context
import PropTypes from 'prop-types';

// Defining the UserContextProvider component as a Context Provider
const UserContextProvider = ({children}) => {

  // State to manage the user data
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