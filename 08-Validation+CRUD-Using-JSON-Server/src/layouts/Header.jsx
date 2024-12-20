import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar navbar-expand-md navbar-dark bg-secondary shadow mb-5'>
        <div className="container">
            <NavLink to={`/`} className='navbar-brand'>CRUD-APP</NavLink>
            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={`/login`} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/register`} className={({ isActive }) => (isActive ? 'active nav-link' : 'nav-link')}>Register</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;