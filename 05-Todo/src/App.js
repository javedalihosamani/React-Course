import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layout";
import { ToastContainer } from "react-toastify";
import { Home, Create, Pnf } from "./component";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer position={'top-right'} theme={`colored`} autoClose={3000}/>
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/home`} element={<Home/>}/>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
