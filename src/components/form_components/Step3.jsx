import React, { useState } from "react";
import Dropdown from "./Dropdown";

const Step3 = ({ step, prevStep, nextStep, formData, handleInputChange }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const isFileSelected = selectedFile !== null;
  const isFileSelected2 = selectedFile2 !== null;

  // To check that file size should not be more than 2 Mb and type should be only .pdf
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal();
      resetFileInput();
      return;
    }

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput();
      return;
    }
    setSelectedFile(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput = () => {
    // Reset the file input by triggering a click event
    const fileInput = document.getElementById("file-input1");
    if (fileInput) {
      fileInput.value = null; // Clear the input value
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
  const handleFileChange2 = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return; // No file selected
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrorMessage("File size should be less than 2MB");
      openModal2();
      resetFileInput2();
      return;
    }

    if (!file.type.match("application/pdf")) {
      setErrorMessage("Only PDF files are allowed");
      openModal();
      resetFileInput2();
      return;
    }

    setSelectedFile2(file);
  };

  // Reset input value for the file input field if it not satisfy the restriction
  const resetFileInput2 = () => {
    // Reset the file input by triggering a click event
    const fileInput2 = document.getElementById("file-input2");
    if (fileInput2) {
      fileInput2.value = null; // Clear the input value
    }
  };

  const openModal2 = () => {
    setModalOpen2(true);
  };

  const closeModal2 = () => {
    setModalOpen2(false);
  };

  return (
    <>
      <div
        className="step-group"
        style={{ display: step === 3 ? "block" : "none" }}
      >
        {/* Step 3 content */}
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="PSID"
              name="psid"
              value={formData.psid}
              onChange={(e) => handleInputChange("psid", e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="PS Title"
              name="psTitle"
              value={formData.psTitle}
              onChange={(e) => handleInputChange("psTitle", e.target.value)}
            />
          </div>
        </div>

        <div className="form-box">
          {/* First */}
          <div className="form-group drag-area">
            <input
              type="file"
              name="file1"
              style={{ display: "none" }}
              id="file-input1"
              onChange={handleFileChange}
              accept=".pdf"
            />
            <label htmlFor="file-input1" className="custom-file-input">
              Choose PDF
            </label>
            <div className="file-name">
              {selectedFile ? selectedFile.name : "No file chosen"}
            </div>
          </div>

          {/* second */}
          <div className="form-group drag-area">
            <input
              type="file"
              name="file2"
              style={{ display: "none" }}
              id="file-input2"
              onChange={handleFileChange2}
              accept=".pdf"
            />
            <label htmlFor="file-input2" className="custom-file-input">
              Choose Consent Letter
            </label>
            <div className="file-name">
              {selectedFile2 ? selectedFile2.name : "No file chosen"}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="form-box">
          <div className="btn-step">
            <button type="button" onClick={prevStep}>
              &#129128; Prev
            </button>
            <button type="button" onClick={nextStep}>
              Next &#129130;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
