// import React from "react";
// import { Paper, Grid, Box } from "@material-ui/core";
// import { renderButton } from "./DisplayComponents";

// const ReviewDetails = ({ state, idea_ppt, consent_letter,handleOnChange, handleNext, handlePrev}) => {

//   const {
//     leaderName,
//     teamName,
//     leaderPhone,
//     leaderEmail,
//     instituteName,
//     leaderGender,
//     theme,
//     member1Name,
//     member1Email,
//     member1Gender,
//     member2Name,
//     member2Email,
//     member2Gender,
//     member3Name,
//     member3Email,
//     member3Gender,
//     member4Name,
//     member4Email,
//     member4Gender,
//     PSCode,
//     PSTitle,
//   } = state;


//   return (
//     <Paper component={Box} style={{ padding: "2rem", margin: "2rem auto" }}>
//       {/* Displaying extracted values */}
//       <Grid container spacing={4}>
//         {/* Team Details */}
//         <Grid sm={12} lg={12}>
//           <Box
//             mt={4}
//             mb={4}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textTransform: "uppercase",
//               color: "var(--skin-color)",
//               fontSize: "1.25rem",
//               fontWeight: "bold",
//               margin: "2rem 1rem",
//             }}
//           >
//             Team Details
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Leader Name - </strong> {leaderName}
//           </Box>
//         </Grid>

//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Leader Phone - </strong> {leaderPhone}
//           </Box>
//         </Grid>

//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Leader Gender - </strong> {leaderGender}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Team Name - </strong> {teamName}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Theme - </strong> {theme}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Leader Email - </strong> {leaderEmail}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Institute Name - </strong> {instituteName}
//           </Box>
//         </Grid>
//         {/* Team Member Details */}
//         <Grid sm={12} lg={12}>
//           <Box
//             mt={4}
//             mb={4}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textTransform: "uppercase",
//               color: "var(--skin-color)",
//               fontSize: "1.25rem",
//               fontWeight: "bold",
//               margin: "2rem 1rem",
//             }}
//           >
//             Team Member Details
//           </Box>
//         </Grid>
//         {/* Member 1 Details */}
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 1 Name - </strong> {member1Name}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 1 Gender - </strong> {member1Gender}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Member 1 Email - </strong> {member1Email}
//           </Box>
//         </Grid>

//         {/* Member 2 Details */}
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 2 Name - </strong> {member2Name}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 2 Gender - </strong> {member2Gender}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Member 2 Email - </strong> {member2Email}
//           </Box>
//         </Grid>

//         {/* Member 3 Details */}
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 3 Name - </strong> {member3Name}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 3 Gender - </strong> {member3Gender}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Member 3 Email - </strong> {member3Email}
//           </Box>
//         </Grid>

//         {/* Member 4 Details */}
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 4 Name - </strong> {member4Name}
//           </Box>
//         </Grid>
//         <Grid item lg={6} sm={12} xs={12}>
//           <Box>
//             <strong>Member 4 Gender - </strong> {member4Gender}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Member 4 Email - </strong> {member4Email}
//           </Box>
//         </Grid>

//         {/* Problem Statement Details */}
//         <Grid sm={12} lg={12}>
//           <Box
//             mt={4}
//             mb={4}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textTransform: "uppercase",
//               color: "var(--skin-color)",
//               fontSize: "1.25rem",
//               fontWeight: "bold",
//               margin: "2rem 1rem",
//             }}
//           >
//             Problem Statement Details
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>PS Code - </strong> {PSCode}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>PS Title - </strong> {PSTitle}
//           </Box>
//         </Grid>
//         {/* Idea PPT and Consent Letter Details */}
//         <Grid sm={12} lg={12}>
//           <Box
//             mt={4}
//             mb={4}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               textTransform: "uppercase",
//               color: "var(--skin-color)",
//               fontSize: "1.25rem",
//               fontWeight: "bold",
//               margin: "2rem 1rem",
//             }}
//           >
//             Additional Documents
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Idea PPT - </strong> {idea_ppt ? idea_ppt.name : "Not Uploaded"}
//           </Box>
//         </Grid>
//         <Grid item lg={12} sm={12} xs={12}>
//           <Box>
//             <strong>Consent Letter - </strong> {consent_letter ? consent_letter.name : "Not Uploaded"}
//           </Box>
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
//             label: "Payment",
//             handleOnClick: handleNext,
//           })}
//         </Box>
//       </Grid>
//     </Paper>
//   );
// };

// export default ReviewDetails;
