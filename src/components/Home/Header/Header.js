import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import Main from '../Main/Main';
import Navbar from '../../Shared/Navbar/Navbar';
import "./Header.css"

const Header = () => {
    return (
        <header className='header'>
            <Navbar></Navbar>
            <Main></Main>
            <CardInfo></CardInfo>
        </header>
    );
};

export default Header;