// import React, { useState } from "react";
// import { Paper, Grid, Box } from "@material-ui/core";
// import { Spinner } from 'react-bootstrap';
// import { renderText, renderButton } from "./DisplayComponents";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { API_URL } from "../../store/apiurl";

// const URL = `${API_URL}/api/team/register`;

// const Payment = ({
//   state,
//   handleOnChange,
//   handleNext,
//   handlePrev,
//   handleFileChange,
//   payment_screenshot,
// }) => {


//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     const id = toast.loading("Submitting Form")
//     try {
//       const formData = new FormData();

//       const data = state.data;
//       // Loop through the fields in the data object
//       for (const field in data) {
//         if (data.hasOwnProperty(field)) {
//           formData.append(field, data[field]);
//         }
//       }

//       // Append the files
//       formData.append("ideaPPT", state.idea_ppt);
//       formData.append("consentLetter", state.consent_letter);
//       formData.append("paymentScreenshot", state.payment_screenshot);

//       const response = await fetch(URL, {
//         method: "POST",
//         body: formData,
//       });

//       if (response.ok) {
//         // Redirect to the finished page on success
//         console.log("Form submitted: "+response);
//         toast.update(id, { render: "Form Submitted Successfully :)", type: "success", isLoading: false });
//         setLoading(false);
//         handleNext(event);
//       } else {
//         // Show an alert on failure
//         toast.update(id, { render: "Failed to submit form! Please try again after some time", type: "error", isLoading: false });
//         setLoading(false);
//       }
//     } catch (error) {
//       console.error("Error during form submission:");
//       toast.update(id, { render: "Something went Wrong!", type: "error", isLoading: false });
//       setLoading(false);
//     }
//   };

//   return (
//     <Paper component={Box} style={{ padding: "2rem", margin: "2rem auto" }}>
//       <Box mt={1} mb={2}>
//         {renderText({ label: "Scan QR to Payment", variant: "h6" })}
//       </Box>

//       {/* Row 1 (QR Code) */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12}>
//           <div className="qr-code">
//             <img src="./images/other/qr-code.png" alt="QR Code" />
//           </div>
//         </Grid>
//       </Grid>

//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12}>
//           <div className="upload-box">
//             <div className="drag-area">
//               <input
//                 type="file"
//                 name="payment_screenshot"
//                 accept="image/*"
//                 style={{ display: "none" }}
//                 id="file-input"
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="file-input" className="custom-file-input">
//                 Payment Screenshot
//               </label>
//               <div className="file-name">
//                 {payment_screenshot
//                   ? payment_screenshot.name
//                   : "No file chosen"}
//               </div>
//             </div>
//           </div>
//         </Grid>
//       </Grid>

//       {/* Back and Next Button */}
//       <Grid container spacing={4} justifyContent="flex-end">
//         <Box style={{ padding: "1rem" }}>
//           {renderButton({
//             label: "Back",
//             handleOnClick: handlePrev,
//             color: "default",
//           })}
//         </Box>
//         <Box style={{ padding: "1rem" }}>
//         {loading ? (
//           <>
//             <Spinner animation="border" size="sm" className="mr-2" />
//             Loading...
//           </>
//         ) : renderButton({
//           label: "Submit",
//           handleOnClick: handleSubmit,
//           disabled: !payment_screenshot,
//         })}
//         </Box>
//       </Grid>
//     </Paper>
//   );
// };

// export default Payment;
