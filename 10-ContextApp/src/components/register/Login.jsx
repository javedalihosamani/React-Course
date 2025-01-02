import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data, [name]: value });
    }

    const {loginUser,setIsLogin} = useContext(AuthContext);
    //console.log(loginUser);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(data);
        loginUser().then((response) => {
            //console.log(response.data);
            response.data.find(find => find.email === data.email && find.password === data.password) ? toast.success("Login Successfully") : toast.error("Invalid Email or Password");
            setIsLogin(true);
            navigate('/home');
        }).catch((error) => {toast.error(error)});      
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card shadow">
                        <div className="card-header bg-info">
                            <h1 className="card-title text-center">Login</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" required value={data.email} onChange={handleChange}/>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" required value={data.password} onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-outline-info">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login