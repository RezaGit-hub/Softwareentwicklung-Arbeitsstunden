import { Outlet, Link } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1 className="layout-logo">Stundenplanung</h1>
        <nav className="layout-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/plan">Mein Plan</Link>
          <Link to="/">Plan bearbeiten</Link>
          
          <Link to="/register">Mein Profile</Link>
        </nav>
      </header>

      <main className="layout-content">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <p>© SS2026 Software Projekt </p>
      </footer>
    </div>
  );
}

export default MainLayout;