
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Employee Portal
        </NavLink>

        <div className="navbar-nav ms-auto flex-row gap-3">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/employee-form" className="nav-link">
            Employee Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

