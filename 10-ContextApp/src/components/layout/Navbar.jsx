import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const {isLogin,setIsLogin} = useContext(AuthContext);
    const logoutUser = () => {
        setIsLogin(false);
        toast.success("Logout Successfully");
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg shadow bg-info mb-5">
            <div className="container">
                <NavLink className="navbar-brand" to={`/`}>CRUD-AUTH</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">CRUD AUTH</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {
                        isLogin ? <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={`/home`}>Home</NavLink>
                        </li> 
                        <li className="nav-item" onClick={logoutUser}>
                            <NavLink className="nav-link" aria-current="page">Logout</NavLink>
                        </li>      
                    </ul> : <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to={`/login`}>Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={`/register`}>Register</NavLink>
                        </li>          
                    </ul>
                    }
                </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar