
export const signUpFormControls = [
  {
    type: "text",
    label: "User Name",
    name: "userName",
    placeholder: "Enter your user name", 
    required: true,
    componentType: "input",
  },
  {
    type: "email",
    label: "User Email",
    name: "userEmail",
    placeholder: "Enter your user email", 
    required: true,
    componentType: "input",
  },
  {
    type: "password", 
    label: "Password",
    name: "password",
    placeholder: "Enter your password", 
    required: true,
    componentType: "input",
  },
];

export const signInFormControls = [
 
  {
    type: "email",
    label: "User Email",
    name: "user Email",
    placeholder: "Enter your user email", 
    required: true,
    componentType: "input",
  },
  {
    type: "password", 
    label: "Password",
    name: "password",
    placeholder: "Enter your password", 
    required: true,
    componentType: "input",
  },
];

export const initialSignInForm={
  userEmail: "",
  password: "",
};
export const initialSignUpForm={
  userName: "",
  userEmail:"",
  password:"",
};
