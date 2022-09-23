// import React from "react";

// import { useForm } from "../../shared/hooks/form-hook";
// import {
//   VALIDATOR_EMAIL,
//   VALIDATOR_MINLENGTH,
//   VALIDATOR_REQUIRE,
// } from "../../shared/util/validators";
// import Input from "../../shared/components/FormElements/Input";
// import Button from "../../shared/components/FormElements/Button";
// import Card from "../../shared/components/UIElements/Card";
// import "./Auth.css";

// const Register = () => {
//   const [formState, inputHandler] = useForm(
//     {
//       email: {
//         value: "",
//         isValid: false,
//       },
//       password: {
//         value: "",
//         isValid: false,
//       },
//       name: {
//         value: "",
//         isValid: false,
//       },
//     },
//     false
//   );

//   const registerSubmitHandler = (event) => {
//     event.preventDefault();
//     console.log(formState.inputs); // send this to the backend!
//   };

//   return (
//     <Card className="authentication">
//       <form onSubmit={registerSubmitHandler}>
//         <h1>Register here...</h1>
//         <Input
//           id="email"
//           element="input"
//           type="email"
//           label="E-Mail"
//           validators={[VALIDATOR_EMAIL()]}
//           errorText="Please enter a valid Email address."
//           onInput={inputHandler}
//         />
//         <Input
//           id="password"
//           element="input"
//           type="password"
//           label="Password"
//           validators={[VALIDATOR_MINLENGTH(8)]}
//           errorText="Please enter a valid Password (at least 8 characters)."
//           onInput={inputHandler}
//         />
//         <Input
//           id="name"
//           element="text"
//           type="text"
//           label="Name"
//           validators={[VALIDATOR_REQUIRE()]}
//           errorText="Please enter your name."
//           onInput={inputHandler}
//         />
//         <Button to="/auth">Login?</Button>
//         <Button type="submit" disabled={!formState.isValid}>
//           Sign Up
//         </Button>
//       </form>
//     </Card>
//   );
// };
// export default Register;
