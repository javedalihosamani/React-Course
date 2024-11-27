import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Ex1, Ex2, Ex3 } from "./components";
import { Footer, Header } from "./layout";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path={`/`} element={<Ex1/>}/>
          <Route path={`/ex1`} element={<Ex1/>}/>
          <Route path={`/ex2`} element={<Ex2/>}/>
          <Route path={`/ex3`} element={<Ex3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
