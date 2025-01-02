import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({...data, [name]: value });
    }

    const {registerUser} = useContext(AuthContext);
    //console.log(registerUser);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(data);
        registerUser(data).then((response) => {
            console.log(response);
            navigate('/login');
            toast.success("Data has been saved successfully");
        }).catch((error) => {toast.error(error.response.data)});
        
    }
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
                    <div className="card shadow">
                        <div className="card-header bg-info">
                            <h1 className="card-title text-center">Register</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className="form-control" placeholder="Full Name" required value={data.name} onChange={handleChange}/>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" required value={data.email} onChange={handleChange}/>
                                </div>
                                <div className="form-group my-3">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" id="mobile" className="form-control" placeholder="Mobile Number" required value={data.mobile} onChange={handleChange}/>
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

export default Register