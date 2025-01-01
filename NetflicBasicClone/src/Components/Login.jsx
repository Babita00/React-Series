import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Form submitted", { email, password });
    if (!email || !password) {
      setError("Please fill in both email and password");
    } else {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/2`
        );
        const result = await response.data;
        if (result.status) {
          setError(null);
          navigate("/home");
        } else {
          //
        }
      } catch (error) {
        setError("Failed to fetch user details", error);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-dark">
        <div className="bg-black bg-opacity-85 w-96 rounded-lg p-6">
          <h2 className="text-2xl text-white font-bold mb-6 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            {/* Input: Email */}
            <div className="mb-4">
              <input
                type="text"
                value={email}
                placeholder="Email or Mobile Number"
                className="w-full p-4 border border-gray-300 bg-black bg-opacity-85 text-white placeholder-white rounded-lg"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {/* Input: Password */}
            <div className="mb-4">
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="w-full p-4 border border-gray-300 bg-black bg-opacity-85 text-white placeholder-white rounded-lg"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {/* Error Message */}
            {error && (
              <div className="mb-4 text-red-500 text-center">{error}</div>
            )}
            {/* Button: Sign In */}
            <button
              type="submit"
              className="w-full h-16 bg-red-500 text-white font-bold rounded-lg hover:bg-red-400 transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
