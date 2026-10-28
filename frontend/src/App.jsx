import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScanPalm from "./pages/ScanPalm";
import Analysis from "./pages/Analysis";
import Report from "./pages/Report";
import FutureChat from "./pages/FutureChat";
import Wallet from "./pages/Wallet";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.SCAN} element={<ScanPalm />} />
        <Route path={ROUTES.ANALYSIS} element={<Analysis />} />
        <Route path={ROUTES.REPORT} element={<Report />} />
        <Route path={ROUTES.CHAT} element={<FutureChat />} />
        <Route path={ROUTES.WALLET} element={<Wallet />} />
        <Route path={ROUTES.HISTORY} element={<History />} />
        <Route path={ROUTES.PROFILE} element={<Profile />} />
        <Route path={ROUTES.SETTINGS} element={<Settings />} />
        <Route path={ROUTES.PRIVACY} element={<Privacy />} />
        <Route path={ROUTES.TERMS} element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;