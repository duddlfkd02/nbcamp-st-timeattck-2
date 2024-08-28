import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Pokedetail from "./components/Pokedetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dex" element={<Dex />}></Route>
        <Route path="/detail/:id" element={<Pokedetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
