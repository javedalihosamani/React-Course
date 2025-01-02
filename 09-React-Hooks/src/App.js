import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer, Header } from "./layout";
import {Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Pnf} from './components';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path={`/`} element={<Ex1 />} />
        <Route path={`/ex1`} element={<Ex1 />} />
        <Route path={`/ex2`} element={<Ex2 />} />
        <Route path={`/ex3`} element={<Ex3 />} />
        <Route path={`/ex4`} element={<Ex4 />} />
        <Route path={`/ex5`} element={<Ex5 />} />
        <Route path={`/ex6`} element={<Ex6 />} />
        <Route path={`/ex7`} element={<Ex7 />} />
        <Route path={`/ex8`} element={<Ex8 />} />
        <Route path={`/ex9`} element={<Ex9 />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
