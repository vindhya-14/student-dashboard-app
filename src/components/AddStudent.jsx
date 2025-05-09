import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user] = useAuthState(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !course || !email) {
      setError("All fields are required!");
      return;
    }

    const newStudent = { name, course, email };
    addStudent(newStudent);
    setName("");
    setCourse("");
    setEmail("");
    setError("");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-lg shadow-md max-w-lg mx-auto mt-6">
      {user ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <h2 className="text-2xl font-semibold text-teal-700 text-center mb-2">
            ➕ Add New Student
          </h2>
          {error && (
            <div className="bg-red-100 text-red-700 border border-red-400 rounded p-2 text-sm text-center">
              {error}
            </div>
          )}
          <input
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Student Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="">Select Course</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="History">History</option>
          </select>
          <button
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 rounded-lg font-medium transition duration-200"
          >
            Add Student
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-600">
          Please log in to add students.
        </p>
      )}
    </div>
  );
};

export default AddStudent;
