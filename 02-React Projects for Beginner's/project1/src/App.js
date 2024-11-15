import { Counter, MealsApi, Pnf, Todo, ToggleBG } from './components';
import {Header, Footer} from './layout';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          {/* Your routes go here */}
          <Routes>
            {/* Add more routes as needed */}
            <Route path={`/`} element={<Counter />} />
            <Route path={`/counter`} element={<Counter />} />
            <Route path={`/todo`} element={<Todo />} />
            <Route path={`/meals`} element={<MealsApi />} />
            <Route path={`/toggle`} element={<ToggleBG />} />
            <Route path={`/*`} element={<Pnf />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
