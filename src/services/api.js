import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const api = axios.create();

const mock = new MockAdapter(api, { delayResponse: 1000 });

let students = [
  { id: 1, name: "Alice", email: "alice@example.com", course: "Math" },
  { id: 2, name: "Bob", email: "bob@example.com", course: "Science" },
];

mock.onGet("/students").reply(200, students);

mock.onPost("/students").reply((config) => {
  const newStudent = JSON.parse(config.data);
  newStudent.id = students.length + 1;
  students.push(newStudent);
  return [200, newStudent];
});

export default api;
