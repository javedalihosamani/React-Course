import { useContext } from "react"
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
    const {isLogin} = useContext(AuthContext);
    console.log(isLogin);
  return (
    <>
        {
            isLogin ? <Outlet/> : <Navigate to={`/login`}/>
        }
    </>
  )
}

export default PrivateRouter