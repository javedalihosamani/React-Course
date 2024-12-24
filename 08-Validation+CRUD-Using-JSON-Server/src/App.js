import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header, Footer} from './layouts';
import { ToastContainer } from "react-toastify";
import {Login, Register, Pnf, Dashboard, Create, Update} from './components';
import ProtectedRoute from './protect-route/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer autoClose={4000} position={"top-right"} />
      <Routes>
        <Route element={<ProtectedRoute/>}>
          <Route path={``} element={<Dashboard/>}/>
          <Route path={`/dashboard`} element={<Dashboard/>}/>
          <Route path={`/create`} element={<Create/>}/>
          <Route path={`/update/:id`} element={<Update/>}/>
        </Route>
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
