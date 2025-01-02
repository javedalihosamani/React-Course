import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-success shadow mb-5">
        <div className="container">
            <NavLink to={`/`}  className="navbar-brand">React Hooks</NavLink>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={`/ex1`} className='nav-link'>Ex1</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex2`}  className='nav-link'>Ex2</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex3`} className='nav-link'>Ex3</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex4`} className='nav-link'>Ex4</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex5`} className='nav-link'>Ex5</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex6`} className='nav-link'>Ex6</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex7`} className='nav-link'>Ex7</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex8`} className='nav-link'>Ex8</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`/ex9`} className='nav-link'>Ex9</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header