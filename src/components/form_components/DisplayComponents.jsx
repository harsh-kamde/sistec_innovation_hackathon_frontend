// import { Typography, TextField, MenuItem, Button } from "@material-ui/core";

// // For Text Label
// export const renderText = ({ label, align, variant }) => (
//   <Typography
//     style={{ color: "#302e4d" }}
//     align={align ? align : "center"}
//     variant={variant ? variant : "h6"}
//   >
//     {label}
//   </Typography>
// );

// // For Input Field
// export const renderInputText = ({
//   label,
//   name,
//   color,
//   state,
//   handleOnChange,
// }) => {
//   const { data, errors } = state;
//   return (
//     <TextField
//       required
//       label={label}
//       color={color ? color : "primary"}
//       variant="standard"
//       fullWidth={true}
//       size="small"
//       name={name}
//       value={data[name]}
//       error={errors[name] ? true : false}
//       helperText={errors[name]}
//       onChange={handleOnChange}
//     />
//   );
// };

// // For Dropdown
// export const renderSelect = ({
//   label,
//   name,
//   color,
//   state,
//   options,
//   handleOnChange,
// }) => {
//   const { data, errors } = state;
//   return (
//     <TextField
//       select
//       label={label}
//       color={color ? color : "primary"}
//       variant="standard"
//       fullWidth={true}
//       size="small"
//       name={name}
//       value={data[name]}
//       error={errors[name] ? true : false}
//       helperText={errors[name]}
//       onChange={handleOnChange}
//     >
//       {options.map((option) => (
//         <MenuItem key={option.value} value={option.value} style={{display: 'flex', flexDirection: 'column', alignItems: 'start', margin: '0.25rem 1rem'}}>
//           {option.label}
//         </MenuItem>
//       ))}
//     </TextField>
//   );
// };

// // For Button
// export const renderButton = ({ label, variant, color, handleOnClick, disabled }) => (
//   <Button
//     variant={variant ? variant : "outlined"}
//     color={color ? color : "primary"}
//     size="small"
//     onClick={handleOnClick}
//     disabled={disabled}
//   >
//     {label}
//   </Button>
// );
