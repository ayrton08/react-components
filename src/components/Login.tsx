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
}: LoginProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => {}}
      validationSchema={schema}
    >
      {() => (
        <Form
          className={dark ? "form-dark" : "form-light"}
          onSubmit={(values) => onEvent({ ...values })}
        >
          <img src={icon} alt="" className="login" />
          <h3>Login</h3>

          <input
            type="text"
            placeholder="Email"
            id="username"
            className={dark ? "input-dark" : "input-light"}
            name="email"
          />

          <input
            type="password"
            placeholder="Password"
            id="password"
            className={dark ? "input-dark" : "input-light"}
            name="password"
          />

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
    // <form className={dark ? "form-dark" : "form-light"} onSubmit={onEvent}>
    // <img src={icon} alt="" className="login" />
    // <h3>Login</h3>

    // {/* <label htmlFor="username">Username</label> */}
    // <input
    //   type="text"
    //   placeholder="Email"
    //   id="username"
    //   className={dark ? "input-dark" : "input-light"}
    // />

    // {/* <label htmlFor="password">Password</label> */}
    // <input
    //   type="password"
    //   placeholder="Password"
    //   id="password"
    //   className={dark ? "input-dark" : "input-light"}
    // />

    // <button className={dark ? "button-dark" : "button-light"}>Log In</button>
    // <a
    //   href={onRegister}
    //   className={dark ? "register-dark" : "register-light"}
    // >
    //   Create new account
    // </a>
    // <div className="social">
    //   {google && (
    //     <div className="icons-container">
    //       {google && <img src={google || ""} alt="" className="icon" />}
    //       <span>Google</span>
    //     </div>
    //   )}
    //   {facebook && (
    //     <div className="icons-container">
    //       {facebook && <img src={facebook || ""} alt="" className="icon" />}

    //       <span>Facebook</span>
    //     </div>
    //   )}
    // </div>
    // </form>
  );
};