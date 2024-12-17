import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
return (
<nav className="navbar navbar-expand-md navbar-dark bg-danger shadow">
    <div className="container">
        <NavLink to={`/`} className="navbar-brand">MUSIC-PLAYER</NavLink>

        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to={`/music`} className="nav-link">MUSIC</NavLink>
                </li>
                {/* <li className="nav-item">
                    <NavLink to={`/track`} className="nav-link">TRACK</NavLink>
                </li> */}
            </ul>
        </div>
    </div>
</nav>
)
}

export default Header