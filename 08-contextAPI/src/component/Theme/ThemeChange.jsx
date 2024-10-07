import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'; // Import the sun icon

function ThemeChange() {
    const [theme, changeTheme] = useState("light");

    const handleTheme = () => {
        changeTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className={`h-screen w-screen flex items-center justify-end ${theme === "light" ? "bg-white" : "bg-black"} transition-all duration-300 overflow-hidden`}>
            {/* This wrapper div keeps the button fixed */}
            <div className="absolute top-5 right-5">
                <button 
                    className={`flex items-center p-2 text-black font-semibold rounded-lg 
                    ${theme === "light" ? "bg-gray-200 hover:bg-gray-300" : "bg-gray-800 hover:bg-gray-700"} 
                    transition-all duration-300`} 
                    title={`Current theme: ${theme}`} 
                    onClick={handleTheme}
                >
                    <FontAwesomeIcon icon={faSun} className={`${theme === "light" ? "text-black" : "text-white"}`} />
                </button>
            </div>
        </div>
    );
}

export default ThemeChange;
