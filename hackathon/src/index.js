import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Szukaj from "./routes/szukaj";
import Poszukuje from "./routes/poszukuje";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="szukaj" element={<Szukaj />} />
      <Route exact path="poszukuje" element={<Poszukuje />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);