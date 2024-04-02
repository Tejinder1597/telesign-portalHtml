import { Navbar as FlowbiteNav, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import './Navbar.css';
import React from 'react';
import logoSVG from '../../assets/telesign-logo-blue.svg';

const Navbar: React.FC = () => {
    return (
        <FlowbiteNav fluid rounded className="bordered-nav">
            <FlowbiteNav.Brand href="https://telesign.com">
                <img src={logoSVG} alt="Navbar Logo" className="logo-image"></img>
            </FlowbiteNav.Brand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="https://support.telesign.com/s/" className="navbar-link">
                    Support
                </NavbarLink>
            </NavbarCollapse>
        </FlowbiteNav>
    )
}

export default Navbar;