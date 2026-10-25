
import { useState } from "react";

export default function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    location: "",
    salary: "",
  });

  const [success, setSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccess(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSuccess(true);
    console.log("Employee details:", form);
  }

  function handleReset() {
    setForm({
      name: "",
      designation: "",
      location: "",
      salary: "",
    });
    setSuccess(false);
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-7">
          <h2 className="fw-bold mb-2">Employee Form</h2>
          <p className="text-secondary mb-4">
            Enter employee details below.
          </p>

          {success && (
            <div className="alert alert-success">
              Employee form submitted successfully!
            </div>
          )}

          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="designation" className="form-label">
                    Designation
                  </label>
                  <input
                    id="designation"
                    name="designation"
                    className="form-control"
                    value={form.designation}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    className="form-control"
                    value={form.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="salary" className="form-label">
                    Salary
                  </label>
                  <input
                    id="salary"
                    name="salary"
                    type="number"
                    min="0"
                    step="0.01"
                    className="form-control"
                    value={form.salary}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary me-2">
                  Submit
                </button>

                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
