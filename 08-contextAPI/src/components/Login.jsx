import { useContext, useState } from "react";
import userContext from "../context/userContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext); //setUser from UserContext provider

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    setUser({ email, password });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="block w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 bg-white placeholder-gray-400"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="block w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 bg-white placeholder-gray-400"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
