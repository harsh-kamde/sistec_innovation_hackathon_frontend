// import React, { Component } from "react";
// import "../../stylesheets/RegistrationFormStyle.css";

// import {
//   Box,
//   Grid,
//   Paper,
//   withStyles,
//   Stepper,
//   Step,
//   StepLabel,
// } from "@material-ui/core";
// import { Style } from "./Style";
// import { PropTypes } from "prop-types";
// import { renderText } from "./DisplayComponents";
// import Step1 from "./Step1";
// import Step2 from "./Step2";
// import Step3 from "./Step3";
// import Payment from "./Payment";
// import Finished from "./Finished";
// import ReviewDetails from "./ReviewDetails";

// // Class Component
// class FormComponent extends Component {
//   state = {
//     data: {
//       // Step-1 Fields (Team Details)
//       leaderName: "",
//       teamName: "",
//       leaderPhone: "",
//       leaderEmail: "",
//       instituteName: "",
//       leaderGender: "",
//       theme: "",

//       // Step-2 Fields (Team Members Details)
//       member1Name: "",
//       member1Email: "",
//       member1Gender: "",

//       member2Name: "",
//       member2Email: "",
//       member2Gender: "",

//       member3Name: "",
//       member3Email: "",
//       member3Gender: "",

//       member4Name: "",
//       member4Email: "",
//       member4Gender: "",

//       // Step-3 Fields (Solution)
//       PSCode: "",
//       PSTitle: "",
//     },
//     idea_ppt:null,
//     consent_letter:null,
//     payment_screenshot:null,
//     errors: {},
//     currentStep: 0,
//   };

//   render() {
//     const { classes } = this.props;

//     // Regular expression for validation
//     const phoneValidation = new RegExp(/^\d{1,10}$/);
//     const emailValidation = new RegExp(
//       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
//     );
//     const nameValidation = new RegExp(/^[a-zA-Z\s]{3,}$/);
//     const teamNameValidation = new RegExp(/^[a-zA-Z _-]{3,}$/);

//     const handleOnChange = (event) => {
//       const { data, errors } = this.state;

//       if (event.target.name === "teamName") {
//         if (!teamNameValidation.test(event.target.value)) {
//           errors[event.target.name] = "Invalid Team Name";
//         } else {
//           delete errors[event.target.name];
//         }
//       } else if (
//         event.target.name === "leaderName" ||
//         event.target.name === "member1Name" ||
//         event.target.name === "member2Name" ||
//         event.target.name === "member3Name" ||
//         event.target.name === "member4Name"
//       ) {
//         if (!nameValidation.test(event.target.value)) {
//           errors[event.target.name] = "Invalid Name";
//         } else {
//           delete errors[event.target.name];
//         }
//       } else if (
//         event.target.name === "leaderEmail" ||
//         event.target.name === "member1Email" ||
//         event.target.name === "member2Email" ||
//         event.target.name === "member3Email" ||
//         event.target.name === "member4Email"
//       ) {
//         if (!emailValidation.test(event.target.value)) {
//           errors[event.target.name] = "Invalid email";
//         } else {
//           delete errors[event.target.name];
//         }
//       } else if (event.target.name === "leaderPhone") {
//         if (!phoneValidation.test(event.target.value)) {
//           errors[event.target.name] = "Invalid Phone Number";
//         } else {
//           delete errors[event.target.name];
//         }
//       }

//       data[event.target.name] = event.target.value;

//       this.setState({ data, errors });
//     };


//     const handleFileChange = (event) => {
//       const { name, files } = event.target;
//       this.setState({
//         [name]: files[0], // Assuming you are allowing only one file to be uploaded
//       });
//     };

//     const handleNext = () => {
//       const { currentStep, data } = this.state;

//       // Fields to check in the step 1
//       const step1FieldsToCheck = [
//         "leaderName",
//         "teamName",
//         "leaderPhone",
//         "leaderEmail",
//         "instituteName",
//         "leaderGender",
//         "theme",
//       ];

//       // Fields to check in the step 2
//       const step2FieldsToCheck = [
//         "member1Name",
//         "member1Email",
//         "member1Gender",
//         "member2Name",
//         "member2Email",
//         "member2Gender",
//         "member3Name",
//         "member3Email",
//         "member3Gender",
//         "member4Name",
//         "member4Email",
//         "member4Gender",
//       ];

//       // Fields to check in the step 3
//       const step3FieldsToCheck = ["PSCode", "PSTitle"];

//       // Check if any of the fields in the current step is empty
//       const isAnyFieldEmpty =
//         currentStep === 0
//           ? step1FieldsToCheck.some((field) => data[field].trim() === "")
//           : currentStep === 1
//           ? step2FieldsToCheck.some((field) => data[field].trim() === "")
//           : step3FieldsToCheck.some((field) => data[field].trim() === "");

//       // If every fields of current step are filled then move on next step otherwise no
//       if (isAnyFieldEmpty) {
//         // show submit message
//         document.querySelector(".form-alert-message").style.display = "block";

//         // remove submit message
//         setTimeout(() => {
//           document.querySelector(".form-alert-message").style.display = "none";
//         }, 3000);
//       } else {
//         let nextStep = currentStep + 1;
//         this.setState({ currentStep: nextStep });
//       }
//     };

//     // To move on previous step
//     const handlePrev = () => {
//       let { currentStep } = this.state;
//       currentStep = currentStep - 1;
//       this.setState({ currentStep });
//     };

//     const StepperStep = [
//       { label: "Team Details" },
//       { label: "Team Members Details" },
//       { label: "Solution" },
//       { label: "Review Details" },
//       { label: "Payment" },
//     ];

//     const getStepsItems = (steps) => {
//       switch (steps) {
//         case 0:
//           return (
//             <Step1
//               state={this.state}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//             />
//           );
//         case 1:
//           return (
//             <Step2
//               state={this.state}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//               handlePrev={handlePrev}
//             />
//           );
//         case 2:
//           return (
//             <Step3
//               state={this.state}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//               handlePrev={handlePrev}
//               idea_ppt={this.state.idea_ppt}
//               consent_letter={this.state.consent_letter}
//               handleFileChange={handleFileChange}
//             />
//           );
//         case 3:
//           return (
//             <ReviewDetails
//               state={this.state.data}
//               idea_ppt={this.state.idea_ppt}
//               consent_letter={this.state.consent_letter}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//               handlePrev={handlePrev}
//             />
//           );
//         case 4:
//           return (
//             <Payment
//               state={this.state}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//               handlePrev={handlePrev}
//               handleFileChange={handleFileChange}
//               payment_screenshot={this.state.payment_screenshot}
//             />
//           );
//         case 5:
//           return <Finished />;

//         default:
//           return (
//             <Step1
//               state={this.state}
//               handleOnChange={handleOnChange}
//               handleNext={handleNext}
//             />
//           );
//       }
//     };

//     return (
//       <>
//         <div className="margin-top-ultra-max">
//           <Grid container className={classes.formContainer}>
//             <Grid item xs={12} sm={7}>
//               <Paper component={Box} mb={3} pt={2}>
//                 <Box>{renderText({ label: "SIH 2.0 Registration Form" })}</Box>

//                 <Stepper activeStep={this.state.currentStep} alternativeLabel>
//                   {StepperStep.map((item, index) => (
//                     <Step key={index}>
//                       <StepLabel>{item.label}</StepLabel>
//                     </Step>
//                   ))}
//                 </Stepper>
//               </Paper>

//               <form className={classes.form}>
//                 {getStepsItems(this.state.currentStep)}
//               </form>
//             </Grid>
//           </Grid>

//           <div className="alert-message">
//             <span class="form-alert-message">
//               ⚠️ Please Fill All The Fields!
//             </span>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

// FormComponent.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(Style)(FormComponent);
