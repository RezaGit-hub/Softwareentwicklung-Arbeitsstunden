import { Link } from "react-router-dom";

function DashboardPage() {
  return (
    <div>
      <h2>Willkommen zurück</h2>
      <p>Hier ist deine Übersicht für heute.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem",
          marginTop: "1.5rem",
        }}
      >
        <div style={cardStyle}>
          <h3>Profil</h3>
          <p>Name, Fächer und Kontaktdaten einsehen.</p>
          <Link to="/dashboard">Zum Profil</Link>
        </div>

        <div style={cardStyle}>
          <h3>Mein Plan</h3>
          <p>Heute: 3 Stunden · Nächste Stunde: Mathematik, 8:00 Uhr</p>
          <Link to="/dashboard">Zum Stundenplan</Link>
        </div>

        <div style={cardStyle}>
          <h3>Änderungen</h3>
          <p>Aktuell 1 neue Änderung: Vertretung am Montag.</p>
          <Link to="/dashboard">Zu den Plan bearbeiten</Link>
        </div>
      </div>
    </div>
  );
}

const cardStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  borderRadius: "8px",
  padding: "1rem",
};

export default DashboardPage;