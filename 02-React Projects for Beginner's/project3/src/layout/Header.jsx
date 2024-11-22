import React, { Fragment } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Fragment>
        <Navbar expand="md" bg='secondary' data-bs-theme="dark" className='shadow'>
          <Container>
            <Navbar.Brand>
              <NavLink
                  to={`calc`} 
                  className={({ isActive }) => (isActive ? 'text-dark px-2 text-decoration-none' : 'px-2 text-decoration-none text-dark')}>
                React Projects
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav>
                <NavLink
                  to={`calc`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none text-dark')}>
                  Calculator
                </NavLink>
                
                <NavLink 
                  to={`testimonials`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none text-dark')}>
                  Testimonials
                </NavLink>
                              
                <NavLink 
                  to={`accordions`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none text-dark')}>
                  Accordions
                </NavLink>
                               
                <NavLink 
                  to={`validation`} 
                  className={({ isActive }) => (isActive ? 'text-white px-2 text-decoration-none' : 'px-2 text-decoration-none text-dark')}>
                  Validation
                </NavLink>    
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Fragment>
  )
}

export default Header;