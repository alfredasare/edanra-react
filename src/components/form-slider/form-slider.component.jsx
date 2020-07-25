import React from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import "./form-slider.style.scss";

const FormInputSlider = ({
  sliderChange,
  label,
  max,
  min,
  price,
  ...otherProps
}) => {
  return (
    <div className="form-group">
      <div className="row">
        <label htmlFor={otherProps.id} className="col-md-4">
          {label}
        </label>
      </div>
      <Range
        min={min}
        max={max}
        defaultValue={price}
        onChange={sliderChange}
        {...otherProps}
      />
        <p className="badge-container col-md-12">
            <span className="badge">{price[0]}</span> -{" "}
            <span className="badge">{price[1]}</span>
        </p>
    </div>
  );
};

export default FormInputSlider;
