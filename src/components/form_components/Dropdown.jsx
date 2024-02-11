// import React, { useState } from "react";

// const Dropdown = ({ selected, setSelected, options, color }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleItemClick = (option) => {
//     setSelected(option);
//     setIsActive(false);
//   };

//   return (
//     <>
//       <div className="form-dropdown">
//         <div
//           className={isActive ? "active-border form-dropdown-btn" : "normal-border form-dropdown-btn"}
//           style={
//             isActive
//               ? {
//                   color: color,
//                   border: "1.5px solid var(--skin-color)",
//                   boxShadow: "box-shadow: 0 0 30px rgba(16, 15, 27, 0.15);",
//                 }
//               : {
//                   color: color,
//                   border: "1.5px solid var(--bg-black-25)",
//                   boxShadow: "none",
//                 }
//           }
//           onClick={() => setIsActive(!isActive)}
//         >
//           {selected}
//           <span className="fas fa-caret-down"></span>
//         </div>
//         {isActive && (
//           <div className="form-dropdown-content">
//             {options.map((option, index) => {
//               return (
//                 <div
//                   key={index}
//                   className="form-dropdown-item"
//                   onClick={() => handleItemClick(option)}
//                 >
//                   {option}
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dropdown;


// import React, { useState } from "react";

// const Dropdown = ({ selected, setSelected, options, color }) => {
//   const [isActive, setIsActive] = useState(false);

//   const handleItemClick = (option) => {
//     setSelected(option);
//     setIsActive(false);
//   };

//   return (
//     <>
//       <div className="form-dropdown">
//         <div
//           className={
//             isActive
//               ? "active-border form-dropdown-btn"
//               : "normal-border form-dropdown-btn"
//           }
//           style={
//             isActive
//               ? {
//                   color: color,
//                   border: "1.5px solid var(--skin-color)",
//                   boxShadow: "0 0 30px rgba(16, 15, 27, 0.15)",
//                 }
//               : {
//                   color: color,
//                   border: "1.5px solid var(--bg-black-25)",
//                   boxShadow: "none",
//                 }
//           }
//           onClick={() => setIsActive(!isActive)}
//         >
//           {selected}
//           <span className="fas fa-caret-down"></span>
//         </div>
//         {isActive && (
//           <div className="form-dropdown-content">
//             {options.map((option, index) => (
//               <div
//                 key={index}
//                 className="form-dropdown-item"
//                 onClick={() => handleItemClick(option)}
//               >
//                 {option}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dropdown;

