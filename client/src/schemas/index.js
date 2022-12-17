import * as Yup from "yup";

export const LoginSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email").email("Invalid email format"),
    password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
  });
  
  export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email("Invalid email format").required("Please enter your email"),
    phoneNumber: Yup.string().required("Please enter your phoneNumber"),
    address: Yup.string().required("Please enter your address"),
    gender: Yup.boolean().required().oneOf([0 , 1], 'Selecting the gender field is required'),
  
    password: Yup.string().min(6,"Password must be at least 8 characters").required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });
  