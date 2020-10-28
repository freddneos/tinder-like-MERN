import React from 'react';
import { Forum, Person } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton';
import TindeLogo from '../../assets/ui/tinder-logo.svg'
import './style.css';


export default function Header() {
    return (
        <nav className="header">
            <IconButton>
                <Person fontSize="large" className="header__icon" />
            </IconButton>
            <IconButton>
                <img className="header__logo" src={TindeLogo} alt="tinder center logo" />
            </IconButton>
            <IconButton>
                <Forum fontSize="large" className="header__icon" />
            </IconButton>
        </nav>
    );
}
