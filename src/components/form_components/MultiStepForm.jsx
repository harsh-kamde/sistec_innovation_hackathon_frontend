// // MultiStepForm.js
// import React, { useState } from 'react';
// import { Button, Form, Container, Row, Col } from 'react-bootstrap';

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <Container>
//       <Row>
//         <Col md={{ span: 6, offset: 3 }}>
//           <Form onSubmit={handleSubmit}>
//             {step === 1 && (
//               <>
//                 <Form.Group controlId="firstName">
//                   <Form.Label>First Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="lastName">
//                   <Form.Label>Last Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 <Button variant="primary" onClick={nextStep}>
//                   Next
//                 </Button>
//               </>
//             )}
//             {step === 2 && (
//               <>
//                 <Form.Group controlId="email">
//                   <Form.Label>Email</Form.Label>
//                   <Form.Control
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 <Form.Group controlId="password">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                 </Form.Group>
//                 <Button variant="secondary" onClick={prevStep}>
//                   Previous
//                 </Button>{' '}
//                 <Button variant="primary" type="submit">
//                   Submit
//                 </Button>
//               </>
//             )}
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default MultiStepForm;
