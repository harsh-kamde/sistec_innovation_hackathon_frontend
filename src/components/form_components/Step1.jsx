// import React from "react";
// import { Paper, Grid, Box } from "@material-ui/core";
// import {
//   renderText,
//   renderInputText,
//   renderSelect,
//   renderButton,
// } from "./DisplayComponents";

// const Step1 = ({ state, handleOnChange, handleNext }) => {
//   return (
//     <Paper component={Box} style={{padding: '2rem', margin: '2rem auto'}}>
//       <Box mt={1} mb={2}>
//         {renderText({ label: "Team Details", variant: "h6" })}
//       </Box>

//       {/* Row 1 */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={6}>
//           {renderInputText({
//             label: "Leader Name",
//             name: "leaderName",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>

//         <Grid item xs={12} sm={12} lg={6}>
//           {renderInputText({
//             label: "Team Name",
//             name: "teamName",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Row 2 */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={6}>
//           {renderInputText({
//             label: "Leader Phone",
//             name: "leaderPhone",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>

//         <Grid item xs={12} sm={12} lg={6}>
//           {renderInputText({
//             label: "Leader Email",
//             name: "leaderEmail",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Row 3 */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12}>
//           {renderInputText({
//             label: "Institute Name",
//             name: "instituteName",
//             state: state,
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Row 4 */}
//       <Grid container spacing={4} style={{ marginBottom: "10px" }}>
//         <Grid item xs={12} sm={12} lg={6}>
//           {renderSelect({
//             label: "Leader Gender",
//             name: "leaderGender",
//             state: state,
//             options: [
//               { value: "Male", label: "Male" },
//               { value: "Female", label: "Female" },
//               { value: "Other", label: "Other" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>

//         <Grid item xs={12} sm={12} lg={6}>
//           {renderSelect({
//             label: "Theme",
//             name: "theme",
//             state: state,
//             options: [
//               { value: "Theme 1", label: "Theme 1" },
//               { value: "Theme 2", label: "Theme 2" },
//               { value: "Theme 3", label: "Theme 3" },
//               { value: "Theme 4", label: "Theme 4" },
//               { value: "Theme 5", label: "Theme 5" },
//             ],
//             handleOnChange,
//           })}
//         </Grid>
//       </Grid>

//       {/* Row 5 (For Button) */}
//       <Grid container spacing={4} justifyContent="flex-end">
//         <Box style={{padding: '1rem'}}>
//           {renderButton({
//             label: "Next",
//             handleOnClick: handleNext,
//           })}
//         </Box>
//       </Grid>
//     </Paper>
//   );
// };

// export default Step1;
