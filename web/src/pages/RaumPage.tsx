type Raume = {
    id : string;
    raum: string;
    raumart: string;
    status: string;
}

const meinRaum : Raume[]= [
    {id: "1", raum: "101", raumart: "Klass Raum", status: "Aktive"},
    {id: "2", raum: "102", raumart: "Klass Raum", status: "Aktive"},
    {id: "3", raum: "103", raumart: "Klass Raum", status: "Aktive"},
    {id: "4", raum: "201", raumart: "Klass Raum", status: "Aktive"},
    {id: "5", raum: "202", raumart: "Klass Raum", status: "Aktive"},
    {id: "6", raum: "P1", raumart: "Physik Raum", status: "Aktive"},
    {id: "7", raum: "C1", raumart: "Chemie Raum", status: "Aktive"},
    {id: "7", raum: "S1", raumart: "Sport Halle", status: "Aktive"},
]

function RaumPage(){
    return (
        <div>
            <p>Räume</p>
            <div>
                <table style={{borderCollapse: "collapse", width: "100%", marginTop:"1rem", borderRadius: "10px"}}>
                    <thead style={{backgroundColor: "#edede9"}}>
                        <tr>
                            <th style={cellStyle}>Raum</th>
                            <th style={cellStyle}>Raum Art</th>
                            <th style={cellStyle}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {meinRaum.map((raeume) =>(
                            <tr key={raeume.id}>
                                <th style={cellStyle}>{raeume.raum}</th>
                                <th style={cellStyle}>{raeume.raumart}</th>
                                <th style={cellStyle}>{raeume.status}</th>
                            </tr>
                        )
                        )}
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

export default RaumPage;