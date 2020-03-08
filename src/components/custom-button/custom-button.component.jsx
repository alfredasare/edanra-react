import React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children, ...props}) => {

    return (
        <button className={`btn btn-primary ${props.inverted ? 'inverted' : ''}`} {...props}>{children}</button>
    );
};

export default CustomButton;
