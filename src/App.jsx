
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
        <Route
          path="*"
          element={
            <div className="container py-5 text-center">
              <h2>404 - Page Not Found</h2>
              <a href="/" className="btn btn-primary">
                Go Home
              </a>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

