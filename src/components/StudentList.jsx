import { useState, useEffect } from "react";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [courseFilter, setCourseFilter] = useState("");
  const [newStudent, setNewStudent] = useState({ name: "", course: "" });

  useEffect(() => {
    setTimeout(() => {
      const mockData = [
        { id: 1, name: "John Doe", course: "Math" },
        { id: 2, name: "Jane Smith", course: "Science" },
        { id: 3, name: "Mark Lee", course: "Math" },
        { id: 4, name: "Emily Davis", course: "History" },
      ];
      setStudents(mockData);
    }, 1000);
  }, []);

  const filteredStudents = courseFilter
    ? students.filter((student) => student.course === courseFilter)
    : students;

  const handleAddStudent = (e) => {
    e.preventDefault();
    const student = { ...newStudent, id: students.length + 1 };
    setStudents([...students, student]);
    setNewStudent({ name: "", course: "" });
  };

  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-gradient-to-br from-blue-50 via-white to-cyan-50 shadow-xl rounded-lg">
      <h2 className="text-3xl font-extrabold text-cyan-700 mb-6 text-center">
        🎓 Student Dashboard
      </h2>

      <div className="mb-8">
        <label className="block text-teal-700 font-semibold mb-2">
          Filter by Course
        </label>
        <select
          value={courseFilter}
          onChange={(e) => setCourseFilter(e.target.value)}
          className="w-full p-3 border border-cyan-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        >
          <option value="">All Courses</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </select>
      </div>

      <div className="mb-10 bg-white p-6 rounded-lg shadow-md border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          ➕ Add New Student
        </h3>
        <form onSubmit={handleAddStudent} className="space-y-4">
          <input
            type="text"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
            placeholder="Student Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <select
            value={newStudent.course}
            onChange={(e) =>
              setNewStudent({ ...newStudent, course: e.target.value })
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
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
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          📋 Student List
        </h3>
        <ul className="space-y-3">
          {filteredStudents.map((student) => (
            <li
              key={student.id}
              className="flex justify-between items-center p-4 bg-white border-l-4 border-blue-400 rounded shadow-sm"
            >
              <span className="text-gray-800 font-medium">{student.name}</span>
              <span className="text-sm bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full">
                {student.course}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
