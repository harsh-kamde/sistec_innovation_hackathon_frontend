import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/admin/admin-users`;

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const fetchUsers = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      } else {
        console.error("Failed to fetch users:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={handleRefresh}>
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </button>
          </div>

          <h2>User Table</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>isAdmin</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.isAdmin ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};


