import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  // Dummy login information
  const userId = "123"; // Example: Stored after login

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos/10`
        );
        setUser(response.data);
      } catch (error) {
        setError("Failed to fetch user details", error);
      }
    };

    fetchUserData();
  }, [userId]);

  if (error) return <p>{error}</p>;
  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex flex-col justify-center item-center">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default Profile;
