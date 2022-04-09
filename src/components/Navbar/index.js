import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar  = ({toggle}) => {
  return (
    <> 
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">Szukajka</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="report_missing">Report missing</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="map">Map</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="search">Search</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup">Sign up           .</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  )
};

export default Navbar; 