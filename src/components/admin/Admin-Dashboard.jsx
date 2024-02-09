import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/admin/getAllDataCount`;

export const AdminDashboard = () => {
  const { authorizationToken } = useAuth();
  const [dataCount, setDataCount] = useState([]);

  const getAllDataCount = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDataCount(data);
      } else {
        console.error("Failed to fetch contacts:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllDataCount();
  });

  const handleRefresh = () => {
    getAllDataCount();
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={handleRefresh}>
          <i className="bi bi-arrow-clockwise"></i> Refresh
        </button>
      </div>
      <h2 className="mb-4">Dashboard</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card d-flex align-items-start">
            <div className="card-body d-flex">
              <i className="bi bi-person-circle fs-1 me-3"></i>
              <div>
                <h5 className="card-title">Total Users</h5>
                <p className="card-text">{dataCount.users}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card d-flex align-items-start">
            <div className="card-body d-flex">
              <i className="bi bi-people fs-1 me-3"></i>
              <div>
                <h5 className="card-title">Total Teams</h5>
                <p className="card-text">{dataCount.teams}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card d-flex align-items-start">
            <div className="card-body d-flex">
              <i className="bi bi-chat-left-dots fs-1 me-3"></i>
              <div>
                <h5 className="card-title">Total Queries</h5>
                <p className="card-text">{dataCount.contacts}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="card d-flex align-items-start">
            <div className="card-body d-flex">
              <i className="bi bi-file-earmark-text-fill fs-1 me-3"></i>
              <div>
                <h5 className="card-title">Total Problem Statements</h5>
                <p className="card-text">{dataCount.problemStatementsCount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
