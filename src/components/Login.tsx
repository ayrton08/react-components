import React from "react";
import { Field } from "./Field";
import { Button } from "./Button";
import "./login.css";
import { Formik, Form, validateYupSchema } from "formik";

export interface LoginProps {
  icon?: string;
  dark?: boolean;
  google?: string;
  facebook?: string;
  onRegister?: string;
  onEvent: (args: any) => any;
  schema?: any;
  passwordless: boolean;
}

const initialValues = {
  email: "",
  password: "",
};

export const Login = ({
  google,
  facebook,
  icon,
  dark,
  onRegister,
  onEvent,
  schema,
  passwordless = false,
}: LoginProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => onEvent({ ...values })}
      validationSchema={schema}
    >
      {({ handleChange }) => (
        <Form className={dark ? "form-dark" : "form-light"}>
          <img src={icon} alt="" className="login" />
          <h3>Login</h3>

          <input
            type="text"
            placeholder="Email"
            id="username"
            className={dark ? "input-dark" : "input-light"}
            name="email"
            onChange={handleChange}
          />
          {!passwordless && (
            <input
              type="password"
              placeholder="Password"
              id="password"
              className={dark ? "input-dark" : "input-light"}
              name="password"
              onChange={handleChange}
            />
          )}

          <button
            className={dark ? "button-dark" : "button-light"}
            type="submit"
          >
            Log In
          </button>
          <a
            href={onRegister}
            className={dark ? "register-dark" : "register-light"}
          >
            Create new account
          </a>
          <div className="social">
            {google && (
              <div className="icons-container">
                {google && <img src={google || ""} alt="" className="icon" />}
                <span>Google</span>
              </div>
            )}
            {facebook && (
              <div className="icons-container">
                {facebook && (
                  <img src={facebook || ""} alt="" className="icon" />
                )}

                <span>Facebook</span>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
