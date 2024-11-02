// Import necessary hooks and modules from React and other libraries
import { useState } from "react";
import userContext from "./userContext.js";
import PropTypes from "prop-types";

// Defining the UserContextProvider component as a Context Provider
const UserContextProvider = ({ children }) => {
  // State to manage the user data
  const [user, setUser] = useState(null); //you can call api here
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserContextProvider;
