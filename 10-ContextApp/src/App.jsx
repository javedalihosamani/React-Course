import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Login, Navbar, Register, Pnf, Home } from "./components";
import { ToastContainer } from "react-toastify";
import PrivateRouter from "./privateRouter/PrivateRouter";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <ToastContainer autoClose={4000} position='top-right' />
          <Routes>
            <Route element={<PrivateRouter/>}>
              <Route path='/' element={<Home/>} />
              <Route path='/home' element={<Home/>} />
            </Route>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/*' element={<Pnf/>} />
          </Routes>
          <Footer />
        </Router>
      </AuthContextProvider>
    </>
  )
}

export default App
