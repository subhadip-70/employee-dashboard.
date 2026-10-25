
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load employees");
        return response.json();
      })
      .then(setEmployees)
      .catch(() => setError("Could not load employees. Check your internet connection."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="container py-5">
      <div className="mb-4">
        <h2 className="fw-bold">Employee Dashboard</h2>
        <p className="text-secondary">
          View employee information fetched from the API.
        </p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3 d-flex justify-content-between">
          <h5 className="mb-0">Employee Directory</h5>
          <span className="badge bg-primary">
            {employees.length} Employees
          </span>
        </div>

        {loading ? (
          <div className="text-center p-5">Loading employees...</div>
        ) : error ? (
          <div className="alert alert-danger m-3">{error}</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td className="fw-semibold">{employee.name}</td>
                    <td>
                      <a href={`mailto:${employee.email}`}>
                        {employee.email}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
