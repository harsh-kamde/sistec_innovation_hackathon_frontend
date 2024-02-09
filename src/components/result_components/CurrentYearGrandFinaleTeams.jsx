import React, { useEffect, useState } from "react";
import { previousYearGrandFinaleTeamsAPI } from "../../APIs/resultAPI";
import "../../stylesheets/ResultPageStyle.css";
import { Form, InputGroup } from "react-bootstrap";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/finale-teams`;

const CurrentYearGrandFinaleTeams = () => {
  const [data,setData] = useState([]);

  //getting all the result teams 
  const getAllResults = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
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

  useEffect(() => {
    getAllResults();
  }, []);

  const handleRefresh = () => {
    getAllResults();
  };

  // For Searching
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="container result margin-top-ultra-max">
        <Form>
          <InputGroup className="my-3 search-bar">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="search-input"
            />
          </InputGroup>
        </Form>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">PSID</th>
                <th scope="col">Team Name</th>
                <th scope="col">Team Leader Name</th>
                <th scope="col">Organization</th>
                <th scope="col">PS Category</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">Collage Name</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.PSID.toLowerCase().includes(search) ||
                        item.teamName.toLowerCase().includes(search) ||
                        item.teamLeaderName.toLowerCase().includes(search) ||
                        item.collage.toLowerCase().includes(search);
                })
                .map((element) => {
                  return (
                    <>
                      <tr key={element.id}>
                        <th scope="row">{element.id}</th>
                        <td>{element.PSID}</td>
                        <td>{element.teamName}</td>
                        <td>{element.teamLeaderName}</td>
                        <td>{element.organization}</td>
                        <td>{element.PSCategory}</td>
                        <td>{element.problemStatement}</td>
                        <td>{element.collage}</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default CurrentYearGrandFinaleTeams;
