// Eine einzelne Unterrichtsstunde im Plan
type Stunde = {
  tag: string;
  nummer: number;
  start: string;
  ende: string;
  fach: string;
  klasse: string;
  raum: string;
  istVertretung?: boolean;
};

// Mock-Daten, angelehnt an den Testdatenbestand aus dem Pflichtenheft
const meineStunden: Stunde[] = [
  { tag: "Montag", nummer: 1, start: "8:00", ende: "8:45", fach: "Mathematik", klasse: "7a", raum: "R101" },
  { tag: "Montag", nummer: 2, start: "8:50", ende: "9:35", fach: "Mathematik", klasse: "8b", raum: "R204" },
  { tag: "Mittwoch", nummer: 3, start: "9:55", ende: "10:40", fach: "Physik", klasse: "7a", raum: "P1" },
  { tag: "Donnerstag", nummer: 4, start: "10:45", ende: "11:30", fach: "Mathematik", klasse: "8b", raum: "R204" },
  { tag: "Dienstag", nummer: 1, start: "8:00", ende: "8:45", fach: "Mathematik", klasse: "7a", raum: "R101" },
];

const tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
const stundenNummern = [1, 2, 3, 4, 5, 6];

function MeinPlanPage() {
  function findeStunde(tag: string, nummer: number): Stunde | undefined {
    return meineStunden.find((s) => s.tag === tag && s.nummer === nummer);
  }

  return (
    <div>
      <h2>Mein Plan</h2>

      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={cellStyle}></th>
            {tage.map((tag) => (
              <th key={tag} style={cellStyle}>
                {tag}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stundenNummern.map((nummer) => (
            <tr key={nummer}>
              <td style={cellStyle}>{nummer}.</td>
              {tage.map((tag) => {
                const stunde = findeStunde(tag, nummer);
                return (
                  <td
                    key={tag}
                    style={{
                      ...cellStyle,
                      backgroundColor: stunde ? "#bcf6c5" : "transparent",
                    }}
                  >
                    {stunde && (
                      <div>
                        <strong>{stunde.fach}</strong>
                        <br />
                        {stunde.klasse} · {stunde.raum}
                        <br />
                        {stunde.start} - {stunde.ende}
                      </div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  border: "1px solid #5c92d9",
  padding: "0.5rem",
  textAlign: "left",
  verticalAlign: "top",
  minWidth: "100px",
  backgroundColor: "#ecf8f6"
};

export default MeinPlanPage;