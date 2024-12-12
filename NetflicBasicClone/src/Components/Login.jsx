import { useState } from "react";
function Lgoin() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="flex justify-center item-center h-screen">
        <div className="bg-black  bg-opacity-85 w-96">
          <h2 className="text-xl text-White font-bold mb-4">Sign In</h2>
          <form>
            <div className="mb-4 flex text-black h-30">
              <input
                type="text"
                value={email}
                placeholder="Email or Mobile Number"
                className=" w-full p-2 mt-2 border bg-black bg-opacity-85 text-white placeholder-white rounded-lg"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-4 h-20">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="block w-full p-2 mt-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Lgoin;
