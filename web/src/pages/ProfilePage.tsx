type Lehrkraft = {
  name: string;
  kuerzel: string;
  beschaeftigungsumfang: "Vollzeit" | "Teilzeit";
  faecher: string[];
  bevorzugteZeiten: string[];
  gesperrteZeiten: string[];
};

const meinProfil: Lehrkraft = {
  name: "Meyer",
  kuerzel: "MEY",
  beschaeftigungsumfang: "Vollzeit",
  faecher: ["Mathematik", "Physik"],
  bevorzugteZeiten: ["Montag, 1. Stunde", "Dienstag, 1. Stunde"],
  gesperrteZeiten: [],
};

function ProfilPage() {
  return (
    <div>
      <h2>Mein Profil</h2>

      <div style={{ marginTop: "1rem" }}>
        <p><strong>Name:</strong> {meinProfil.name}</p>
        <p><strong>Kürzel:</strong> {meinProfil.kuerzel}</p>
        <p><strong>Beschäftigungsumfang:</strong> {meinProfil.beschaeftigungsumfang}</p>

        <p><strong>Fächer:</strong></p>
        <ul>
          {meinProfil.faecher.map((fach) => (
            <li key={fach}>{fach}</li>
          ))}
        </ul>

        <p><strong>Bevorzugte Zeiten:</strong></p>
        {meinProfil.bevorzugteZeiten.length > 0 ? (
          <ul>
            {meinProfil.bevorzugteZeiten.map((zeit) => (
              <li key={zeit}>{zeit}</li>
            ))}
          </ul>
        ) : (
          <p>Keine Angabe</p>
        )}

        <p><strong>Gesperrte Zeiten:</strong></p>
        {meinProfil.gesperrteZeiten.length > 0 ? (
          <ul>
            {meinProfil.gesperrteZeiten.map((zeit) => (
              <li key={zeit}>{zeit}</li>
            ))}
          </ul>
        ) : (
          <p>Keine Angabe</p>
        )}
      </div>
    </div>
  );
}

export default ProfilPage;