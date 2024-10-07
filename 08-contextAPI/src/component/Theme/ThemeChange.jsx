import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'; // Import the sun icon

function ThemeChange() {
    const [theme, changeTheme] = useState("light");

    const handleTheme = () => {
      changeTheme(theme === "light" ? "dark" : "light");
    };
  
    return (
        <>
      <div className={`container ${theme}`}>
        <button 
          className="flex items-center justify-between bg-gray-200 hover:bg-gray-300 text-black font-semibold py-2 px-4 rounded-lg w-48" 
          title={`Current theme: ${theme}`} 
          onClick={handleTheme}
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      </div>
      

      </>
    );
}

export default ThemeChange;
