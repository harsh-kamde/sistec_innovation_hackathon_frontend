import { NavLink, Navigate} from "react-router-dom";
export const AdminNavbar = () =>{
  return (<>
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column">
          <div className="container">
            <NavLink className="navbar-brand" exact to="/admin/dashboard">
              SISTec Innovation Hackathon
            </NavLink>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mt-1">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/admin-users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/contacts">
                    Contacts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/teams">
                    Teams
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/problem-statements">
                    Problem Statements
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/results">
                    Results
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/admin/logout">
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  </>);
}