import { useState } from 'react';
import './App.css';

function App() {
  const [theme, changeTheme] = useState("light");

  const handleTheme = () => {
    changeTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`container ${theme}`}>
      <button className="theme" title={`Current theme: ${theme}`} onClick={handleTheme}>
        {/* Place your icon here */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 3.5a1 1 0 1 0 0 2 5.5 5.5 0 1 1-5.5 5.5 1 1 0 1 0-2 0 7.5 7.5 0 1 0 7.5-7.5zM12 0a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zm0 20a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1zm11-11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm-18 0H1a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2zm15.535 4.464a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414zM5.464 9.464a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414zm15.09-8.9a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414a1 1 0 0 0 0-1.414zm-18 0a1 1 0 0 0-1.414 0L2.05 1.05a1 1 0 0 0 1.414 1.414L5.878 1.05a1 1 0 0 0 0-1.414z" />
          </svg>
      </button>
    </div>
  );
}

export default App;
