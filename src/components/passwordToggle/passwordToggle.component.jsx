import React from "react";


const PasswordToggle = ({unHide, toggleName}) => {
    return(
        <label >
            <input type="checkbox" onClick={unHide} name={toggleName}/> show password
        </label>
    )
};

export default PasswordToggle;
