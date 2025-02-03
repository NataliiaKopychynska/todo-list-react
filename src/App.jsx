import "./App.css";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import PartnerPage from "./page/PartnerPage";
import HomePage from "./page/homePage";

function App() {
  return (
    <>
      <Router>
        <nav>
          <NavLink to="/">Мої бажання</NavLink>
          <NavLink to="/partner">Бажання партнера</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage key="home" />} />
          <Route path="/partner" element={<PartnerPage key="partner" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
