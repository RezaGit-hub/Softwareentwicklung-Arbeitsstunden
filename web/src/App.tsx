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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;