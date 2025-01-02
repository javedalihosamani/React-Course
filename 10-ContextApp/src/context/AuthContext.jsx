import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthContextProvider = ({children}) => {

    //console.log(users);
    const [isLogin,setIsLogin] = useState(false);

    const registerUser = async (data) => {
        return await axios.post('/api/register', data);
    }

    const loginUser = async () => {
        return await axios.get('/api/register');
    }  

    return (
        <AuthContext.Provider value={{isLogin,setIsLogin,registerUser,loginUser}}> 
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;