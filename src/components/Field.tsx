import React from "react";
import "./field.css";

export interface FieldProps {
  label?: string;
}

export const Field = ({ label }: FieldProps) => {
  return (
    <div className="container">
      <label htmlFor="email" className="label">
        {label || ""}
      </label>
      <input
        type="email"
        id="email"
        className="input"
        placeholder="test@mail.com"
        required
      />
    </div>
  );
};

export default Field;