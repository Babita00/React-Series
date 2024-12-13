import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const userId = "123";

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/2`
        );
        setUser(response.data);
      } catch (error) {
        setError("Failed to fetch user details");
      }
    };

    fetchUserData();
  }, [userId]);

  if (error)
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <p className="text-red-600 text-lg font-semibold">{error}</p>
      </div>
    );
  if (!user)
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <p className="text-gray-700 text-lg font-medium">Loading...</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Welcome, {user.name}
      </h1>
      <p className="text-gray-700 mb-2">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-gray-700">
        <strong>Address:</strong> {user.address.city}
      </p>
    </div>
  );
}

export default Profile;
