import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Accordions, Calc, FormValidation, Pnf, Testimonials } from './components';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {accordionData} from './components/accordions/utils/content';
function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path={`/`} element={<Calc />} />
        <Route path={`/calc`} element={<Calc />} />
        <Route path={`/testimonials`} element={<Testimonials />} />
        <Route path={`/accordions`} element={<Accordions accordion={accordionData} />} />
        <Route path={`/validation`} element={<FormValidation />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
