import NavbarStyle from './Navbar.module.css'
import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import {accountContext} from '../AccountContext';

const Navbar = () => {

    const {account, setAccount} = useContext(accountContext)

    const style = {
        'display': 'block',
        'color': 'white',
        'textAlign': 'center',
        'padding': '14px 16px',
        'textDecoration': 'none'
    }
    return (
        <header>
            <ul className={
                NavbarStyle.ul
            }>
                <li className={
                    NavbarStyle.li
                }>
                    <NavLink style={style}
                        to="/welcome">Welcome</NavLink>
                </li>
                <li className={
                    NavbarStyle.li
                }>
                    <NavLink style={style}
                        to="/explore">Explore</NavLink>
                </li>
                <li className={
                    NavbarStyle.li
                }>
                    <NavLink style={style}
                        to="/my-status">MyStatus</NavLink>
                </li>
                <li className={
                    NavbarStyle.li
                }>
                    <NavLink style={style}
                        to="/new-card">New Offer</NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Navbar;
