import { useParams } from "react-router-dom";
function User() {
    const {id}=useParams()
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">User</h2>
          <p className="text-gray-600">User:{id}</p>
        </div>
      </div>
    );
  }
  
  
  export default User