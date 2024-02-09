// import React from "react";
// import { Paper, Grid, Box } from "@material-ui/core";
// import {
//   renderText,
//   renderInputText,
//   renderSelect,
//   renderButton,
// } from "./DisplayComponents";

// const Step2 = ({ state, handleOnChange, handleNext, handlePrev }) => {
//   return (
//     <Paper component={Box} style={{ padding: "2rem", margin: "2rem auto" }}>
//       <Box mt={1} mb={2}>
//         {renderText({ label: "Team Member Details", variant: "h6" })}
//       </Box>

//       {/* Member 1 Details */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 1 Name",
//             name: "member1Name",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderSelect({
//             label: "Member 1 Gender",
//             name: "member1Gender",
//             state: state,
//             options: [
//               { value: "Male", label: "Male" },
//               { value: "Female", label: "Female" },
//               { value: "Other", label: "Other" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 1 Email",
//             name: "member1Email",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Member 2 Details */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 2 Name",
//             name: "member2Name",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderSelect({
//             label: "Member 2 Gender",
//             name: "member2Gender",
//             state: state,
//             options: [
//               { value: "Male", label: "Male" },
//               { value: "Female", label: "Female" },
//               { value: "Other", label: "Other" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 2 Email",
//             name: "member2Email",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Member 3 Details */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 3 Name",
//             name: "member3Name",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderSelect({
//             label: "Member 3 Gender",
//             name: "member3Gender",
//             state: state,
//             options: [
//               { value: "Male", label: "Male" },
//               { value: "Female", label: "Female" },
//               { value: "Other", label: "Other" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 3 Email",
//             name: "member3Email",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Member 4 Details */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 4 Name",
//             name: "member4Name",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderSelect({
//             label: "Member 4 Gender",
//             name: "member4Gender",
//             state: state,
//             options: [
//               { value: "Male", label: "Male" },
//               { value: "Female", label: "Female" },
//               { value: "Other", label: "Other" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>
//         <Grid item xs={12} sm={12} lg={4}>
//           {renderInputText({
//             label: "Member 4 Email",
//             name: "member4Email",
//             state: state,
//             handleOnChange,
//           })}
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
//           {renderButton({
//             label: "Next",
//             handleOnClick: handleNext,
//           })}
//         </Box>
//       </Grid>
//     </Paper>
//   );
// };

// export default Step2;
