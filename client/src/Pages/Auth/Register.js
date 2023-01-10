import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import { GlobalStyle } from "../../Assests/Styles/globalStyles";
import { Button } from "../../Assests/Styles/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  gender: "",
  password: "",
  confirm_password: "",
};
const Register = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">CREATE AN ACCOUNT</p>
                <Form />
                <p className="sign-up">
                  Already have an account? <a href="/"> SignIn now</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Form = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        console.log(values);
      },
    });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>

        <div className="input-block">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>

        <div className="input-block">
          <label htmlFor="phoneNumber" className="input-label">
            Phone_Number
          </label>
          <input
            type="number"
            autoComplete="off"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Phone_Number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phoneNumber && touched.phoneNumber ? (
            <p className="form-error">{errors.phoneNumber}</p>
          ) : null}
        </div>

        <div className="input-block">
          <label htmlFor="address" className="input-label">
            Address
          </label>
          <input
            type="address"
            autoComplete="off"
            name="address"
            id="address"
            placeholder="Address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? (
            <p className="form-error">{errors.address}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="address" className="input-label">
            Gender
          </label>
          <RowRadioButtonsGroup />
        </div>

        <div className="input-block">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="input-block">
          <label htmlFor="confirm_password" className="input-label">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="confirm_password"
            id="confirm_password"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>

        <div className="modal-buttons">
          <Button>Registration</Button>
        </div>
      </form>
    </>
  );
};
const RowRadioButtonsGroup = () => {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

const Wrapper = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height:900px;
    width:900px
    background-color: #efedee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    /* height: 60px; */
    background: rgba(51, 51, 51, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }
  .modal-container {
    width: 600px;
    display: flex;
    max-width: 60vw;
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    transition-duration: 0.3s;
    background: #fff;
  }
  .modal-title {
    margin: 0;
    font-weight: 400;
    color: #55311c;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .modal-desc {
    margin: 6px 0 30px 0;
  }
  .modal-left {
    padding: 60px 30px 20px;
    background: #fff;
    flex: 1.5;
    transition-duration: 0.5s;
    opacity: 1;
  }
  .modal-right {
    flex: 2;
    font-size: 0;
    transition: 0.3s;
    overflow: hidden;
  }

  .modal.is-open .modal-left {
    transform: translateY(0);
    opacity: 1;
    transition-delay: 0.1s;
  }
  .modal-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modal-buttons a {
    color: rgba(51, 51, 51, 0.6);
    font-size: 14px;
  }
  .sign-up {
    margin: 60px 0 0;
    font-size: 14px;
    text-align: center;
  }
  .sign-up a {
    color: #8c7569;
  }

  .input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: 0.3s;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }
  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }
  @media (max-width: 750px) {
    .modal-container {
      max-width: 90vw;
    }
    .modal-right {
      display: none;
    }
  }
`;

export default Register;
