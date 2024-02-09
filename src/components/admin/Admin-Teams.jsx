import React, { useState, useEffect } from "react";
import { useAuth } from "../../store/auth";
import * as XLS from 'xlsx';
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/admin/teams`;
const assets_URL = `${API_URL}/`;
export const AdminTeams = () => {
  const [teams, setTeams] = useState([]);
  const { authorizationToken } = useAuth();

  const fetchTeams = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setTeams(data);
      } else {
        console.error("Failed to fetch teams:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  });

  const openInNewTab = (url) => {
    const fileUrl = assets_URL + url;
    window.open(fileUrl, "_blank");
  };

  const handleRefresh = () => {
    fetchTeams();
  };

  //importing the data as excel file
  const exportToExcel = () => {
    const xlsData = teams.map((team) => ({
      LeaderName: team.leaderName,
      TeamName: team.teamName,
      LeaderPhone: team.leaderPhone,
      LeaderEmail: team.leaderEmail,
      InstituteName: team.instituteName,
      LeaderGender: team.leaderGender,
      Theme: team.theme,
      Member1Name: team.member1Name,
      Member1Email: team.member1Email,
      Member1Gender: team.member1Gender,
      Member2Name: team.member2Name,
      Member2Email: team.member2Email,
      Member2Gender: team.member2Gender,
      Member3Name: team.member3Name,
      Member3Email: team.member3Email,
      Member3Gender: team.member3Gender,
      Member4Name: team.member4Name,
      Member4Email: team.member4Email,
      Member4Gender: team.member4Gender,
      PSCode: team.PSCode,
      PSTitle: team.PSTitle,
      IdeaPPT: assets_URL+team.ideaPPT,
      ConsentLetter: assets_URL+team.consentLetter,
      PaymentScreenshot: assets_URL+team.paymentScreenshot,
    }));
  
    const ws = XLS.utils.json_to_sheet(xlsData);
    const wb = XLS.utils.book_new();
    XLS.utils.book_append_sheet(wb, ws, "Teams");
    XLS.writeFile(wb, "team_data.xlsx");
  };
  
  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={handleRefresh}>
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </button>
            <button className="btn btn-success ms-1" onClick={exportToExcel}>
              Export as Excel
            </button>
          </div>
          <h2>Teams Table</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Theme</th>
                <th>Leader Name</th>
                <th>Team Name</th>
                <th>Institute</th>
                <th>Leader Phone</th>
                <th>PDF (Idea PPT)</th>
                <th>PDF (Consent Letter)</th>
                <th>Image (Payment Screenshot)</th>
              </tr>
            </thead>
            <tbody>
              {teams
              .sort((a, b) => a.theme.localeCompare(b.theme))
              .map((team) => (
                <tr key={team._id}>
                  <td>{team.theme}</td>
                  <td>{team.leaderName}</td>
                  <td>{team.teamName}</td>
                  <td>{team.instituteName}</td>
                  <td>{team.leaderPhone}</td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => openInNewTab(team.ideaPPT)}
                    >
                      View PDF
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => openInNewTab(team.consentLetter)}
                    >
                      View PDF
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-link"
                      onClick={() => openInNewTab(team.paymentScreenshot)}
                    >
                      View Image
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
