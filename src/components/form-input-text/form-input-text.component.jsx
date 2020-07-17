import React from "react";
import "./form-input-text.styles.scss";

const FormInputText = ({ handleChange, label, price, ...otherProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={otherProps.id}>{label}</label>
      <input className="form-control" onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default FormInputText;
