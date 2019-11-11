import React from 'react';

import LinkWrapper from '../../utils/LinkWrapper';

const Lista = () => {
    return (
        <>
            <li><LinkWrapper to="/autores">Autores</LinkWrapper></li>
            <li><LinkWrapper to="/livros">Livros</LinkWrapper></li>
            <li><LinkWrapper to="/sobre">Sobre</LinkWrapper></li>
        </>
    );
};

const Header = () =>{
    return (
        <header>
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <LinkWrapper to="/" className="brand-logo">Casa do Código</LinkWrapper>
                    <ul id="nav-mobile" className="right">
                        <Lista/>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;
