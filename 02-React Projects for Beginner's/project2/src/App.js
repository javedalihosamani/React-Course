import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Accordions, Calc, FormValidation, Pnf, Testimonials } from './components';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Calc />} />
        <Route path={`/calc`} element={<Calc />} />
        <Route path={`/testimonials`} element={<Testimonials />} />
        <Route path={`/accordions`} element={<Accordions />} />
        <Route path={`/validation`} element={<FormValidation />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
