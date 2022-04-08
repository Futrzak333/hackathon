import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Report from "./routes/Report";
import Search from "./routes/Search";
import Account from "./routes/Account";
import Map from "./routes/Map";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="report" element={<Report />} />
      <Route exact path="search" element={<Search />} />
      <Route exact path="account" element={<Account />} />
      <Route exact path="map" element={<Map />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);