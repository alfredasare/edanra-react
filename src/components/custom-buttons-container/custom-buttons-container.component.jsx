import React from "react";
import {CustomButtonsContainerStyled} from "./custom-buttons-container.styles";

export const CustomButtonsContainer = ({children}) => {

    return (
        <CustomButtonsContainerStyled>
            {children}
        </CustomButtonsContainerStyled>
    );
};

export default CustomButtonsContainer;
