type Klassen ={
    id: string;
    klasse: string;
    jahrgang: string;
    faecher: string;
    wochenstunde: string;
    status: string;
}

const klasse : Klassen[] =[
    {id: "1", klasse: "5a", jahrgang: "5", faecher: "4", wochenstunde: "30", status: "aktive"},
    {id: "2", klasse: "6a", jahrgang: "6", faecher: "4", wochenstunde: "30", status: "aktive"},
    {id: "3", klasse: "6b", jahrgang: "6", faecher: "4", wochenstunde: "30", status: "aktive"},
    {id: "4", klasse: "7a", jahrgang: "7", faecher: "4", wochenstunde: "30", status: "aktive"},
    {id: "5", klasse: "8a", jahrgang: "8a", faecher: "4", wochenstunde: "30", status: "aktive"},
    {id: "6", klasse: "8b", jahrgang: "8b", faecher: "4", wochenstunde: "30", status: "aktive"},
]

function KlassenPage(){
    return(
        <div>
            <p style={{fontSize: "larg"}}>Klassen</p>
            <div>
                <table style={{borderCollapse: "collapse", width: "100%", marginTop:"1rem"}}>
                    <thead style={{backgroundColor: "#edede9"}}>
                        <tr>
                            <th style={cellStyle}>Klasse</th>
                            <th style={cellStyle}>Jahrgang</th>
                            <th style={cellStyle}>Fächer</th>
                            <th style={cellStyle}>Wochen Stunden</th>
                            <th style={cellStyle}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {klasse.map((klasse) => (
                            <tr key={klasse.id}>
                                <th style={cellStyle}>{klasse.klasse}</th>
                                <th style={cellStyle}>{klasse.jahrgang}</th>
                                <th style={cellStyle}>{klasse.faecher}</th>
                                <th style={cellStyle}>{klasse.wochenstunde}</th>
                                <th style={cellStyle}>{klasse.status}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

const cellStyle: React.CSSProperties = {
  border: "1px solid #c6c7c9",
  padding: "0.5rem",
  alignItems: "center"
};

export default KlassenPage;