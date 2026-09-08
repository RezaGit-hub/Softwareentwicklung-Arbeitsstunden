import { useState } from "react";

type Lehrkraft = {
  id: string;
  name: string;
  faecher: string[];
};

type FachZuordnung = {
  fach: string;
  wochenstunden: number;
  lehrkraftId: string;
};

type Klasse = {
  id: string;
  bezeichnung: string;
  jahrgang: number;
  faecher: FachZuordnung[];
};

const alleFaecher = ["Mathematik", "Deutsch", "Physik"];

const lehrkraefte: Lehrkraft[] = [
  { id: "l1", name: "Meyer", faecher: ["Mathematik", "Physik"] },
  { id: "l2", name: "Weber", faecher: ["Deutsch"] },
  { id: "l3", name: "Schulz", faecher: ["Mathematik"] },
];

const initialeKlassen: Klasse[] = [
  {
    id: "k1",
    bezeichnung: "7a",
    jahrgang: 7,
    faecher: [
      { fach: "Mathematik", wochenstunden: 2, lehrkraftId: "l1" },
      { fach: "Deutsch", wochenstunden: 1, lehrkraftId: "l2" },
    ],
  },
  {
    id: "k2",
    bezeichnung: "8b",
    jahrgang: 8,
    faecher: [{ fach: "Mathematik", wochenstunden: 2, lehrkraftId: "l1" }],
  },
  {
    id: "k3",
    bezeichnung: "9c",
    jahrgang: 9,
    faecher: [],
  },
];

function GrundDaten() {
  const [klassen, setKlassen] = useState<Klasse[]>(initialeKlassen);
  const [ausgewaehlteKlasseId, setAusgewaehlteKlasseId] = useState(initialeKlassen[0].id);
  const [neuesFach, setNeuesFach] = useState("");

  const aktuelleKlasse = klassen.find((k) => k.id === ausgewaehlteKlasseId)!;

  function findeLehrkraft(id: string): Lehrkraft | undefined {
    return lehrkraefte.find((l) => l.id === id);
  }

  function aktualisiereWochenstunden(fach: string, wert: number) {
    setKlassen((vorherigeListe) =>
      vorherigeListe.map((klasse) =>
        klasse.id !== ausgewaehlteKlasseId
          ? klasse
          : {
              ...klasse,
              faecher: klasse.faecher.map((f) =>
                f.fach !== fach ? f : { ...f, wochenstunden: wert }
              ),
            }
      )
    );
  }

  function aktualisiereLehrkraft(fach: string, lehrkraftId: string) {
    setKlassen((vorherigeListe) =>
      vorherigeListe.map((klasse) =>
        klasse.id !== ausgewaehlteKlasseId
          ? klasse
          : {
              ...klasse,
              faecher: klasse.faecher.map((f) =>
                f.fach !== fach ? f : { ...f, lehrkraftId }
              ),
            }
      )
    );
  }

  function entferneFach(fach: string) {
    setKlassen((vorherigeListe) =>
      vorherigeListe.map((klasse) =>
        klasse.id !== ausgewaehlteKlasseId
          ? klasse
          : { ...klasse, faecher: klasse.faecher.filter((f) => f.fach !== fach) }
      )
    );
  }

  function fachHinzufuegen() {
    if (!neuesFach) return;
    const passendeLehrkraft = lehrkraefte.find((l) => l.faecher.includes(neuesFach));
    if (!passendeLehrkraft) return;

    setKlassen((vorherigeListe) =>
      vorherigeListe.map((klasse) =>
        klasse.id !== ausgewaehlteKlasseId
          ? klasse
          : {
              ...klasse,
              faecher: [
                ...klasse.faecher,
                { fach: neuesFach, wochenstunden: 1, lehrkraftId: passendeLehrkraft.id },
              ],
            }
      )
    );
    setNeuesFach("");
  }

  const nichtZugeordneteFaecher = alleFaecher.filter(
    (fach) => !aktuelleKlasse.faecher.some((zf) => zf.fach === fach)
  );

  return (
    <div>
      <h2>Grunddaten: Klassen</h2>

      <div style={{ marginTop: "1rem" }}>
        <label htmlFor="klasse-auswahl">Klasse: </label>
        <select
          id="klasse-auswahl"
          value={ausgewaehlteKlasseId}
          onChange={(e) => setAusgewaehlteKlasseId(e.target.value)}
        >
          {klassen.map((k) => (
            <option key={k.id} value={k.id}>
              {k.bezeichnung} (Jahrgang {k.jahrgang})
            </option>
          ))}
        </select>
      </div>

      <table style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={cellStyle}>Fach</th>
            <th style={cellStyle}>Wochenstunden</th>
            <th style={cellStyle}>Lehrkraft</th>
            <th style={cellStyle}></th>
          </tr>
        </thead>
        <tbody>
          {aktuelleKlasse.faecher.map((zuordnung) => (
            <tr key={zuordnung.fach}>
              <td style={cellStyle}>{zuordnung.fach}</td>
              <td style={cellStyle}>
                <input
                  type="number"
                  min={1}
                  value={zuordnung.wochenstunden}
                  onChange={(e) =>
                    aktualisiereWochenstunden(zuordnung.fach, Number(e.target.value))
                  }
                  style={{ width: "60px" }}
                />
              </td>
              <td style={cellStyle}>
                <select
                  value={zuordnung.lehrkraftId}
                  onChange={(e) => aktualisiereLehrkraft(zuordnung.fach, e.target.value)}
                >
                  {lehrkraefte
                    .filter((l) => l.faecher.includes(zuordnung.fach))
                    .map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                </select>
              </td>
              <td style={cellStyle}>
                <button onClick={() => entferneFach(zuordnung.fach)}>Entfernen</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {aktuelleKlasse.faecher.length === 0 && (
        <p style={{ color: "#94a3b8", marginTop: "1rem" }}>
          Dieser Klasse ist noch kein Fach zugeordnet.
        </p>
      )}

      {nichtZugeordneteFaecher.length > 0 && (
        <div style={{ marginTop: "1.5rem" }}>
          <select value={neuesFach} onChange={(e) => setNeuesFach(e.target.value)}>
            <option value="">-- Fach wählen --</option>
            {nichtZugeordneteFaecher.map((fach) => (
              <option key={fach} value={fach}>
                {fach}
              </option>
            ))}
          </select>
          <button onClick={fachHinzufuegen} style={{ marginLeft: "0.5rem" }}>
            Fach hinzufügen
          </button>
        </div>
      )}
    </div>
  );
}

const cellStyle: React.CSSProperties = {
  border: "1px solid #e2e8f0",
  padding: "0.5rem",
  textAlign: "left",
};

export default GrundDaten;