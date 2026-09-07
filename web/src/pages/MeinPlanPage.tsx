import { useState } from "react";

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
  vertretungInfo?: String;
};

// Mock-Daten, angelehnt an den Testdatenbestand aus dem Pflichtenheft
const meineStunden: Stunde[] = [
  { tag: "Montag", nummer: 1, start: "8:00", ende: "8:45", fach: "Mathematik", klasse: "7a", raum: "R101" },
  { tag: "Montag", nummer: 2, start: "8:50", ende: "9:35", fach: "Mathematik", klasse: "8b", raum: "R204" },
  { tag: "Mittwoch", nummer: 3, start: "9:55", ende: "10:40", fach: "Physik", klasse: "7a", raum: "P1" },  
  { tag: "Mittwoch", nummer: 4, start: "9:55", ende: "10:40", fach: "Physik", klasse: "6a", raum: "P1", istVertretung: true, vertretungInfo: "übernommen für Mayer"  }, 
  { tag: "Donnerstag", nummer: 4, start: "10:45", ende: "11:30", fach: "Mathematik", klasse: "8b", raum: "R204" },
  { tag: "Dienstag", nummer: 1, start: "8:00", ende: "8:45", fach: "Mathematik", klasse: "7a", raum: "R101" },
  { tag: "Freitag", nummer: 6, start: "9:55", ende: "10:40", fach: "Mathematik", klasse: "8a", raum: "104", istVertretung: true, vertretungInfo: "Raum geändert(statt R204)" }, 
  
];

const tage = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
const stundenNummern = [1, 2, 3, 4, 5, 6];

type Ansicht = "tag" | "woche";

function MeinPlanPage() {
  const [ansicht, setAnsicht] = useState<Ansicht>("woche");
  const [ausgewaehlterTag, setAusgewaehlterTag] = useState("Montag");

  function findeStunde(tag: string, nummer: number): Stunde | undefined {
    return meineStunden.find((s) => s.tag === tag && s.nummer === nummer);
  }

  return (
    <div>
      <h2>Mein Plan</h2>

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <button
          onClick={() => setAnsicht("tag")}
          style={ansicht === "tag" ? aktivButtonStyle : buttonStyle}
        >
          Tag
        </button>
        <button
          onClick={() => setAnsicht("woche")}
          style={ansicht === "woche" ? aktivButtonStyle : buttonStyle}
        >
          Woche
        </button>
      </div>

      {ansicht === "tag" && (
        <div style={{ marginTop: "1rem" }}>
          <select
            value={ausgewaehlterTag}
            onChange={(e) => setAusgewaehlterTag(e.target.value)}
            style={{ marginBottom: "1rem", padding: "0.4rem" }}
          >
            {tage.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {stundenNummern.map((nummer) => {
                const stunde = findeStunde(ausgewaehlterTag, nummer);
                return (
                  <tr key={nummer}>
                    <td style={cellStyle}>{nummer}.</td>
                    <td
                      style={{
                        ...cellStyle,
                        backgroundColor: stunde
                        ? stunde.istVertretung
                          ? "#fef3c7"
                          : "#91df79"
                        : "transparent",
                      }}
                    >
                      {stunde ? (
                        <div>
                          <strong>{stunde.fach}</strong> ({stunde.start}–{stunde.ende})
                          {stunde.istVertretung && (
                            <span style={badgeStyle}>Vertretung</span>
                          )}
                          {stunde.vertretungInfo && (
                            <div style={{fontSize: "0.8rem", color: "#92400e"}}>{stunde.vertretungInfo}</div>
                          )}
                          <br />
                          {stunde.klasse} · {stunde.raum}
                        </div>
                      ) : (
                        <span style={{ color: "#9eb894" }}>frei</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {ansicht === "woche" && (
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
                        backgroundColor: stunde
                         ? stunde.istVertretung
                           ? "#fef3c7"
                           : "#91df79"
                         : "transparent",
                      }}
                    >
                      {stunde && (
                        <div>
                          <strong>{stunde.fach}</strong>
                          {stunde.istVertretung && (
                            <span style={badgeStyle}>Vertretung</span>
                          )}
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
      )}
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  border: "1px solid #1972e6",
  padding: "0.5rem",
  textAlign: "left",
  verticalAlign: "top",
  minWidth: "100px",
  backgroundColor: "#c9d8c8"
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  border: "1px solid #cbd5e1",
  borderRadius: "6px",
  backgroundColor: "white",
  cursor: "pointer",
};

const aktivButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  backgroundColor: "#1e293b",
  color: "white",
  borderColor: "#1e293b",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  marginLeft: "0.4rem",
  padding: "0.1rem 0.4rem",
  fontSize: "0.7rem",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#d97706",
  borderRadius: "4px",
};

export default MeinPlanPage;