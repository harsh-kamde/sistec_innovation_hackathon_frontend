// import React, { useState, useEffect } from "react";
// import Dropdown from "./Dropdown";

// const Step1 = ({step, nextStep }) => {
//   const [selectedTheme, setSelectedTheme] = useState("Choose Theme");
//   const [selectedGender, setSelectedGender] = useState("Gender");
//   const [leaderName, setLeaderName] = useState("");
//   const [leaderPhone, setLeaderPhone] = useState("");
//   const [leaderEmail, setLeaderEmail] = useState("");
//   const [instituteName, setInstituteName] = useState("");
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [touchedFields, setTouchedFields] = useState({
//     leaderName: false,
//     leaderPhone: false,
//     leaderEmail: false,
//     instituteName: false,
//     selectedTheme: false,
//     selectedGender: false,
//   });

//   useEffect(() => {
//     const nameRegex = /^[a-zA-Z\s]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const phoneRegex = /^\d{10}$/;

//     // Check if all fields are filled
//     const isFormValid =
//       leaderName !== "" &&
//       leaderPhone !== "" &&
//       leaderEmail !== "" &&
//       instituteName !== "" &&
//       selectedTheme !== "Choose Theme" &&
//       selectedGender !== "Gender" &&
//       nameRegex.test(leaderName) &&
//       emailRegex.test(leaderEmail) &&
//       phoneRegex.test(leaderPhone);

//     // Check if any field is touched and not filled
//     const hasEmptyTouchedFields = Object.keys(touchedFields).some(
//       (key) =>
//         touchedFields[key] &&
//         !(key === "selectedTheme" || key === "selectedGender") &&
//         eval(key) === ""
//     );

//     // Update form validity based on touched fields and their values
//     setIsFormValid(!hasEmptyTouchedFields && isFormValid);
//   }, [
//     leaderName,
//     leaderPhone,
//     leaderEmail,
//     instituteName,
//     selectedTheme,
//     selectedGender,
//     touchedFields,
//   ]);

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setTouchedFields({ ...touchedFields, [name]: true });
//     if (name === "leaderName") setLeaderName(value);
//     else if (name === "leaderPhone") setLeaderPhone(value);
//     else if (name === "leaderEmail") setLeaderEmail(value);
//     else if (name === "instituteName") setInstituteName(value);
//   };

//   const handleDropdownChange = (name, value) => {
//     setTouchedFields({ ...touchedFields, [name]: true });
//     if (name === "selectedTheme") setSelectedTheme(value);
//     else if (name === "selectedGender") setSelectedGender(value);
//   };

//   return (
//     <>
//       <div
//         className="step-group"
//         style={{ display: step === 1 ? "block" : "none" }}
//       >
//         <div className="form-box">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-field"
//               placeholder="Leader Name"
//               onChange={handleTextChange}
//               name="leaderName"
//             />
//             {touchedFields.leaderName && !leaderName.match(/^[a-zA-Z\s]+$/) && (
//               <span className="error-message">Invalid Name</span>
//             )}
//           </div>
//           <div className="form-group">
//             <input type="text" className="form-field" placeholder="Team Name" />
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="form-group">
//             <Dropdown
//               selected={selectedTheme}
//               setSelected={(value) =>
//                 handleDropdownChange("selectedTheme", value)
//               }
//               options={[
//                 "Agri-Tech",
//                 "Cyber Security",
//                 "Criminal Database",
//                 "Environment & Climate Control",
//                 "Edu-Tech",
//                 "Force Engagement",
//                 "Health-Tech",
//                 "Miscellaneous",
//                 "Social Media",
//                 "Vehicle Theft",
//               ]}
//             />
//             {touchedFields.selectedTheme &&
//               selectedTheme === "Choose Theme" && (
//                 <span className="error-message">Theme is required</span>
//               )}
//           </div>
//           <div className="form-group">
//             <Dropdown
//               selected={selectedGender}
//               setSelected={(value) =>
//                 handleDropdownChange("selectedGender", value)
//               }
//               options={["Gender", "Male", "Female", "Other"]}
//             />
//             {touchedFields.selectedGender && selectedGender === "Gender" && (
//               <span className="error-message">Gender is required</span>
//             )}
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="form-group">
//             <input
//               type="tel"
//               className="form-field"
//               placeholder="Leader phone"
//               onChange={handleTextChange}
//               name="leaderPhone"
//             />
//             {touchedFields.leaderPhone && !leaderPhone.match(/^\d{10}$/) && (
//               <span className="error-message">Invalid Phone</span>
//             )}
//           </div>
//           <div className="form-group">
//             <input
//               type="email"
//               className="form-field"
//               placeholder="Leader Email"
//               onChange={handleTextChange}
//               name="leaderEmail"
//             />
//             {touchedFields.leaderEmail &&
//               !leaderEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) && (
//                 <span className="error-message">Invalid Email</span>
//               )}
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-field"
//               placeholder="Institute Name"
//               onChange={handleTextChange}
//               name="instituteName"
//             />
//             {touchedFields.instituteName &&
//               !instituteName.match(/^[a-zA-Z\s]+$/) && (
//                 <span className="error-message">Invalid Institute Name</span>
//               )}
//           </div>
//         </div>

//         <div className="form-box">
//           <div className="btn-step">
//             <button type="button" onClick={nextStep} disabled={!isFormValid}>
//               Next &#129130;
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Step1;

import React from "react";
import Dropdown from "./Dropdown";

const Step1 = ({ step, nextStep, formData, handleInputChange }) => {
  const themes = [
    "Agri-Tech",
    "Environment & Climate Control",
    "Edu-Tech",
    "Health-Tech",
    "Law & Order",
    "Miscellaneous",
    "Smart City",
    "Security",
  ];

  const gender = ["Male", "Female", "Other"];

  return (
    <>
      <div
        className="step-group"
        style={{ display: step === 1 ? "block" : "none" }}
      >
        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Leader Name"
              name="leaderName"
              value={formData.leaderName}
              onChange={(e) => handleInputChange("leaderName", e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Team Name"
              name="teamName"
              value={formData.teamName}
              onChange={(e) => handleInputChange("teamName", e.target.value)}
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <Dropdown
              selected={formData.selectedTheme}
              setSelected={(option) =>
                handleInputChange("selectedTheme", option)
              }
              options={themes}
              color={
                formData.selectedTheme === "Choose Theme"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
          <div className="form-group">
            <Dropdown
              selected={formData.selectedGender}
              setSelected={(option) =>
                handleInputChange("selectedGender", option)
              }
              options={gender}
              color={
                formData.selectedGender === "Leader Gender"
                  ? "#cac1ce"
                  : "var(--text-black-700)"
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="tel"
              className="form-field"
              placeholder="Leader Phone"
              name="leaderPhone"
              value={formData.leaderPhone}
              onChange={(e) => handleInputChange("leaderPhone", e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-field"
              placeholder="Leader Email"
              name="leaderEmail"
              value={formData.leaderEmail}
              onChange={(e) => handleInputChange("leaderEmail", e.target.value)}
            />
          </div>
        </div>

        <div className="form-box">
          <div className="form-group">
            <input
              type="text"
              className="form-field"
              placeholder="Institute Name"
              name="instituteName"
              value={formData.instituteName}
              onChange={(e) =>
                handleInputChange("instituteName", e.target.value)
              }
            />
          </div>
        </div>

        <div className="form-box">
          <div className="btn-step">
            <button type="button" onClick={nextStep}>
              Next &#129130;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
