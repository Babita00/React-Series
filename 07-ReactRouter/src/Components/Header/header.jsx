import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Main navigation links in center */}
          <div className="hidden lg:flex flex-1 justify-center" id="main-menu">
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Login and Sign Up buttons aligned to right */}
          <div className="flex items-center lg:order-2 ml-auto space-x-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-gray-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none duration-200 ${
                  isActive
                    ? "bg-gray-50 focus:ring-4 focus:ring-gray-300"
                    : "hover:bg-gray-50"
                }`
              }
            >
              Log in
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none ${
                  isActive
                    ? "bg-gray-50 focus:ring-4 focus:ring-gray-300"
                    : "hover:bg-gray-50"
                }`
              }
            >
              Sign Up
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
