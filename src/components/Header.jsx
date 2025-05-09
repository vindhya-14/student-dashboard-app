import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

export default function Header() {
  const [user, loading] = useAuthState(auth); // Get the current user state

  const handleLogout = () => {
    signOut(auth); // Log the user out
  };

  return (
    <header className="bg-gray-900 text-white p-6 flex justify-between items-center shadow-md">
      {/* Logo/Title - Clickable to go to home page */}
      <Link
        to="/"
        className="text-3xl font-semibold hover:text-blue-500 transition duration-300"
      >
        Student Dashboard
      </Link>

      <div className="flex items-center space-x-6">
        {loading ? (
          <span className="text-gray-400">Loading...</span>
        ) : user ? (
          <>
            <span className="text-lg text-gray-200">
              Welcome, {user.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-500 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-500 transition duration-300"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
