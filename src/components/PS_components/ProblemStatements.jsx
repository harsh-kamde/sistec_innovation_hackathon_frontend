import React, { useEffect, useState } from "react";
import problemStatementsAPI from "../../APIs/problemStatementsAPI";
import "../../stylesheets/PSPageStyle.css";
import { Form, InputGroup, Modal, Button } from "react-bootstrap";
import { API_URL } from "../../store/apiurl";

const URL = `${API_URL}/api/problemStatements`;

const ProblemStatements = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);

  const getAllProblems = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data: " + data);
        setData(data);
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
    getAllProblems();
  }, []);

  //for the popup problem description
  const handleShow = (element) => {
    setSelectedElement(element);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  // Foe Searching
  const [search, setSearch] = useState("");
  return (
    <>
      <section className="container problem-statements margin-top-ultra-max">
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
                <th scope="col">Organization</th>
                <th scope="col">Problem Statement</th>
                <th scope="col">PS Number</th>
                <th scope="col">Category</th>
                <th scope="col">Domain Bucket</th>
                <th scope="col">Problem Description</th>
              </tr>
            </thead>
            <tbody>
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.PSNumber.toLowerCase().includes(search) ||
                        item.problemStatement.toLowerCase().includes(search) ||
                        item.organization.toLowerCase().includes(search);
                })
                .sort((a, b) => a.id - b.id)
                .map((element) => {
                  return (
                    <>
                      <tr key={element.id}>
                        <th scope="row">{element.id}</th>
                        <td>{element.organization}</td>
                        <td>{element.problemStatement}</td>
                        <td>{element.PSNumber}</td>
                        <td>{element.category}</td>
                        <td>{element.domainBucket}</td>
                        <td>
                          <button
                            className="btn"
                            onClick={() => handleShow(element)}
                          >
                            View Description
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>

          {selectedElement && (
            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>
                  PS Code: {selectedElement.PSNumber}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
               <strong>Problem Statement:</strong> {selectedElement.problemStatement}
                <br/>
                <br/>
               <strong>Description:</strong> {selectedElement.description}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>

        {/* Coming soon Animation */}
        {/* Remove this as Problem Statements becomes finale
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '3rem 1rem'}}>
          <h2>Available Soon</h2>
        </div>  */}
      </section>
    </>
  );
};

export default ProblemStatements;
