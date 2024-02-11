// import React, { useState } from "react";

// const Step5 = ({ step, prevStep, nextStep }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const isFileSelected = selectedFile !== null;

//   // To check that file size should not be more than 2 Mb and type should be only .jpg or .png or .jpeg
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];

//     if (!file) {
//       return; // No file selected
//     }

//     if (file.size > 2 * 1024 * 1024) {
//       setErrorMessage("File size should be less than 2MB");
//       openModal();
//       resetFileInput();
//       return;
//     }

//     if (!file.type.match("image/(jpeg|jpg|png)")) {
//       setErrorMessage("Only JPEG, JPG, or PNG images are allowed");
//       openModal();
//       resetFileInput();
//       return;
//     }

//     setSelectedFile(file);
//   };

//   const resetFileInput = () => {
//     // Reset the file input by triggering a click event
//     const fileInput = document.getElementById("file-input");
//     if (fileInput) {
//       fileInput.value = null; // Clear the input value
//     }
//   };

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <>
//       <div
//         className="step-group"
//         style={{ display: step === 5 ? "block" : "none" }}
//       >
//         {/* QR Code Image */}
//         <div className="qr-code">
//           <img src="./images/other/qr-code.png" alt="QR Code" />
//         </div>

//         <div className="form-box">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-field"
//               placeholder="UTR or Transaction ID"
//             />
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="form-group drag-area">
//             <input
//               type="file"
//               name="file"
//               style={{ display: "none" }}
//               id="file-input"
//               onChange={handleFileChange}
//               accept=".jpg, .jpeg, .png"
//             />
//             <label htmlFor="file-input" className="custom-file-input">
//               Payment Screenshot
//             </label>
//             <div className="file-name">
//               {selectedFile ? selectedFile.name : "No file chosen"}
//             </div>
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="form-box">
//           <div className="btn-step">
//             <button type="button" onClick={prevStep}>
//               &#129128; Prev
//             </button>
//             <button type="button" onClick={nextStep}>
//               Submit &#129130;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Step5;
