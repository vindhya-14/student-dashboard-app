import StudentList from "../components/StudentList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-100 via-white to-cyan-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <StudentList />
      </div>
    </div>
  );
}
