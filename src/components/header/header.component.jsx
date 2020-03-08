import React from 'react';
import './header.styles';
import {HeaderContainer} from "./header.styles";

const Header = ({title, imageUrl}) => {

    return (

        <HeaderContainer imageUrl={imageUrl}>
            <h1 className="animated fadeIn delay-1s">{title}</h1>
        </HeaderContainer>
    );
};

export default Header;
