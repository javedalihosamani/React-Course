import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layout";
import { ToastContainer } from "react-toastify";
import Create from "./component/Create";
import Pnf from './component/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <ToastContainer position={'top-right'} theme={`colored`}/>
      <Routes>
        <Route path={`/create`} element={<Create/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
