import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Footer} from './layouts';
import { ToastContainer } from "react-toastify";
import {Login, Register, Pnf} from './components';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer autoClose={4000} position={"top-right"} />
      <Routes>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
