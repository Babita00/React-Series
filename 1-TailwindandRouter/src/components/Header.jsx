import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
      <div className="flex items-center space-x-2">
        <span className="text-2xl font-bold text-blue-600">
          Component Library
        </span>
      </div>

      <div className="flex-grow flex justify-center">
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/sizing"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }
            >
              Sizing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/topography"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }
            >
              Topography
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colors"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }
            >
              Colors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shadows"
              className={({ isActive }) =>
                isActive ? "text-blue-600" : "text-gray-600 hover:text-blue-600"
              }
            >
              Shadows
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
