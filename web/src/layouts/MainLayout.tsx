import { Outlet, Link } from "react-router-dom";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">
      <header className="layout-header">
        <h1 className="layout-logo">Stundenplanung</h1>
        <nav className="layout-nav">
          <Link to="/">Start</Link>
          
          <Link to="/register">Registrieren</Link>
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