import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons"; // Import the sun icon

import "./App.css";

function App() {
  const [theme, changeTheme] = useState("light");

  const handleTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme}`}>
      <button
        className="theme"
        title={`Current theme: ${theme}`}
        onClick={handleTheme}
      >
        {/* Place your icon here */}

        <FontAwesomeIcon icon={faSun} />
      </button>
    </div>
  );
}

export default App;
