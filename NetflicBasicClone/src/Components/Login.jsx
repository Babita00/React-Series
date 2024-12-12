import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password");
    } else {
      setError(null);
      navigate("/home");
    }
  };
  return (
    <>
      <div className="flex justify-center item-center h-96 bg-dark ">
        <div className="bg-black  bg-opacity-85 w-96 rounded-lg">
          <h2 className="text-2xl text-white font-bold mt-4 flex justify-center item-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex text-black ">
              <input
                type="text"
                value={email}
                placeholder="Email or Mobile Number"
                className="w-full p-2 mx-2 border bg-black bg-opacity-85 text-white placeholder-white rounded-lg h-16"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="mb-4 flex text-black ">
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="w-full p-2 mx-2 border bg-black bg-opacity-85 text-white placeholder-white rounded-lg h-16"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {error && <div className="mb-4 text-red-500">{error}</div>}

            <button
              type="submit"
              className="w-full mt-4 mx-2 h-16 bg-red-500 text-white rounded-lg hover:bg-red-300"
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
