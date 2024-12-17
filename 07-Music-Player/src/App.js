import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Music, Pnf, Track } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={`/`} element={<Music />}/>
        <Route path={`/music`} element={<Music />}/>
        <Route path={`/track/:id`} element={<Track />} />
        <Route path={`/*`} element={<Pnf />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
