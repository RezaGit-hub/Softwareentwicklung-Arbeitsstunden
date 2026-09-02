import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import StartPage from "./pages/StartPage";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import AuthLayout from "./layouts/AuthLayout";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;