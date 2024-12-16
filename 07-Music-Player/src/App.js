import { BrowserRouter } from "react-router-dom";
import { Header, Footer } from "./layout";
import { Music } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Music/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
