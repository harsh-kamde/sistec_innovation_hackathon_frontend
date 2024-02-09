import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as XLSX from "xlsx";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/finale-teams`;
const uploadURL = `${API_URL}/api/admin/add-finale-team`;
const deleteURL = `${API_URL}/api/admin/finale/deleteAll`;

export const AdminResults = () => {
  const [result, setResult] = useState([]);
  const { authorizationToken } = useAuth();
  const [file, setFile] = useState(null);

  const getAllResults = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
        console.log("results data: " + data);
      } else {
        console.error(
          "Failed to fetch problem statements:",
          response.statusText
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

    //deleting the all finale to submit another finale teams
  const deleteAllFinale = async () =>{
    if (window.confirm("Are you sure you want to delete all finale teams?")) {
            try {
                const response = await fetch(deleteURL, {
                    method: "DELETE",
                    headers: {
                        Authorization: authorizationToken,
                    },
                });
                if (response.ok) {
                    getAllResults();
                    toast.success("All Fiinale Teams Removed Successfully!");
                } else {
                    toast.error("Something went wrong!");
                }
            } catch (error) {
                console.log(error);
            }
        }
  }

  useEffect(() => {
    getAllResults();
  }, []);

  const uploadData = async (jsonData) => {
    // console.log("passed data: "+JSON.stringify(jsonData));
    try {
      const response = await fetch(uploadURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(jsonData),
      });

      if (response.ok) {
        toast.success("File Uploaded Successfully!");
        getAllResults();
      } else {
        toast.error("File upload failed!");
      }
    } catch (error) {
      toast.error("Something went wrong :( ");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) {
      console.error("No file selected");
      return;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
        header: 0,
      });

      // Update the state with the new data
      uploadData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  //exporting to excel
  const exportToExcel = () => {
    const xlsData = result.map((item) => ({
      id: item.id,
      PSID: item.PSID,
      teamName: item.teamName,
      teamLeaderName: item.teamLeaderName,
      organization: item.organization,
      PSCategory: item.PSCategory,
      problemStatement: item.problemStatement,
      collage: item.collage,
    }));

    const ws = XLSX.utils.json_to_sheet(xlsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Results");
    XLSX.writeFile(wb, "results_sih.xlsx");
  };

  return (
    <>
      <section className="container mt-4">
        <h4>Update Result list: </h4>
        <div className="mb-3">
          <input type="file" onChange={handleFileChange} />
          <button className="btn btn-primary" onClick={handleFileUpload}>
            Upload Excel File
          </button>
        </div>
      </section>
      <section>
        <div className="container mt-4 mb-3">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-success ms-1" onClick={exportToExcel}>
              Export as Excel
            </button>
            <button className="btn btn-danger ms-1" onClick={deleteAllFinale}>
          Remove Finale Teams
        </button>
          </div>
          <h2>Result List 2024: </h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>S.N.</th>
                <th>PS ID</th>
                <th>Team Name</th>
                <th>Team Leader Name</th>
                <th>Organization</th>
                <th>Category</th>
                <th>Problem Statement</th>
                <th>Institute</th>
              </tr>
            </thead>
            <tbody>
              {result
              .sort((a, b) => a.id - b.id)
              .map((selected_team) => (
                <tr key={selected_team.id}>
                  <td>{selected_team.id}</td>
                  <td>{selected_team.PSID}</td>
                  <td>{selected_team.teamName}</td>
                  <td>{selected_team.teamLeaderName}</td>
                  <td>{selected_team.organization}</td>
                  <td>{selected_team.PSCategory}</td>
                  <td>{selected_team.problemStatement}</td>
                  <td>{selected_team.collage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default AdminResults;
