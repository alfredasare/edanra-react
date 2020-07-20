import React from "react";
import Slider, { Range } from "rc-slider";
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
        <p className="col-md-8">
          <span class="badge">{price[0]}</span> -{" "}
          <span class="badge">{price[1]}</span>
        </p>
      </div>
      <Range
        min={min}
        max={max}
        defaultValue={price}
        onChange={sliderChange}
        {...otherProps}
      />
    </div>
  );
};

export default FormInputSlider;
