import { NavLink, Navigate } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "bootstrap-icons/font/bootstrap-icons.css";
export const AdminSidebar = () => {
  const { user } = useAuth();
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100"
        style={{ width: "280px" }}
      >
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <i className="bi bi-person-circle fs-1 me-3"></i>
          <NavLink to="/admin/dashboard" className="link-dark text-decoration-none">
            <span className="fs-5">Hi, {user.username} !</span>
          </NavLink>
        </div>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          {/* <li className="nav-item">
            <NavLink
              exact
              to="/admin/"
              className="nav-link"
            ><i class="bi bi-house-door m-1"></i>
              Home
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink to="/admin/dashboard" className="nav-link">
              <i class="bi bi-speedometer2 m-1"></i>
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/admin-users"
              className="nav-link"
              // activeClassName="active"
            >
              <i className="bi bi-people m-1"></i>
              Users
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/contacts"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-chat-left-dots m-1"></i>
              Contacts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/teams"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-microsoft-teams m-1"></i>
              Teams
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/problem-statements"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-file-earmark-text-fill m-1"></i>
              Problem Statements
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/results"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-table m-1"></i>
              Results
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/admin/logout"
              className="nav-link"
              // activeClassName="active"
            >
              <i class="bi bi-box-arrow-right m-1"></i>
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
