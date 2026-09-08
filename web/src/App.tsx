import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import StartPage from "./pages/StartPage";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import AuthLayout from "./layouts/AuthLayout";
import MeinPlanPage from "./pages/MeinPlanPage";
import LogoutPage from "./pages/LogoutPage";
import BearbeitenPage from "./pages/BearbeitenPage";
import ProfilePage from "./pages/ProfilePage";
import AdminPage from "./pages/AdminPage";
import AdminLayout from "./layouts/AdminLayout";
import GrundDaten from "./pages/GrundDaten";
import PlannenPage from "./pages/PlannenPage";
import VertrenenPage from "./pages/VertrenenPage";
import LehrkraftPage from "./pages/LehrkraftPage";
import FachPage from "./pages/FachPage";
import KlassenPage from "./pages/KlassenPage";
import RaumPage from "./pages/RaumPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<AuthLayout />}>
          <Route path="/" element={<StartPage />} />
          <Route path="/onboarding" element={<OnboardingPage/>}/>
        </Route>
        <Route element={<MainLayout/>}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/plan" element={<MeinPlanPage/>}/> 
          <Route path="/logout" element={<LogoutPage/>}/>
          <Route path="/bearbeiten" element={<BearbeitenPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>

        <Route element={<AdminLayout/>}>
          <Route path="/admin" element={<AdminPage/>}/>
          <Route path="/grunddaten" element={<GrundDaten/>}/>
          <Route path="/plannen" element={<PlannenPage/>}/>
          <Route path="/vertretung" element={<VertrenenPage/>}/>
          <Route path="/lehrer" element={<LehrkraftPage/>}/>
          <Route path="/fach" element={<FachPage/>}/>
          <Route path="/klass" element={<KlassenPage/>}/>
          <Route path="/raum" element={<RaumPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;