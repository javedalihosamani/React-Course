import React from 'react'
import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <Navbar expand="md" bg='primary' data-bs-theme="dark" className='shadow'>
            <Container>
                <NavbarBrand>
                    <NavLink 
                        to={`/`}
                        className={'text-white text-decoration-none'}
                    >
                        React Projects
                    </NavLink>
                </NavbarBrand>
                <NavbarToggle />
                <NavbarCollapse>
                    <Nav className="ms-auto">
                        <NavLink 
                            to={`counter`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none" )}
                        >Counter</NavLink>
                        <NavLink 
                            to={`todo`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none" )}
                        >Todo</NavLink>
                        <NavLink 
                            to={`meals`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none" )}
                        >MealsAPI</NavLink>
                        <NavLink 
                            to={`toggle`}
                            className={({isActive}) => ( isActive ? 'text-white px-2 text-decoration-none' : "px-2 text-decoration-none" )}
                        >ToggleBG</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Header