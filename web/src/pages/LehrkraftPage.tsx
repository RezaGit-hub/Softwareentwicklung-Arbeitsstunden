

type Lehrkraft = {
    id: string;
    name: string;
    faecher: string[];
    beschaeftigungsumfang: "Vollzeit" | "Teilzeit";
    bevorzeugtezeit: string;
    gesperrtezeit: string
};

const lehrkraefte: Lehrkraft[] = [
    {id: "1", name: "Weber", faecher:["Deutsch"], beschaeftigungsumfang: "Teilzeit", bevorzeugtezeit: "20", gesperrtezeit:"Montags"},
    {id: "2", name: "Meyer", faecher:["Mathematik", "Physik"], beschaeftigungsumfang: "Vollzeit", bevorzeugtezeit: "38", gesperrtezeit: "keine "},
    {id: "3", name: "Schulz", faecher:["Mathematik"], beschaeftigungsumfang: "Vollzeit", bevorzeugtezeit: "38", gesperrtezeit: "keine "},
]

function LehrkraftPage(){
    return(
        <div>
            <p>Lehrkraft Übersicht</p>
            <div>
                <table style={{borderCollapse: "collapse", width: "100%", marginTop:"1rem"}}>
                    <thead style={{width: "100%"}}>
                        <tr>
                            <th style={cellStyle}>Name</th>
                            <th style={cellStyle}>Fächer</th>
                            <th style={cellStyle}>Beschäftigungsumfang</th>
                            <th style={cellStyle}>Bevorzuegte Zeiten</th>
                            <th style={cellStyle}>Gesperrte Zeiten</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lehrkraefte.map((lehrkraeft) =>(
                            <tr key={lehrkraeft.id}>
                                <td style={cellStyle}>{lehrkraeft.name}</td>
                                <td style={cellStyle}>{lehrkraeft.faecher.map((fach)=> ( <li key={fach}>{fach}</li>))}</td>
                                <td style={cellStyle}>{lehrkraeft.beschaeftigungsumfang}</td>
                                <td style={cellStyle}>{lehrkraeft.bevorzeugtezeit}</td>
                                <td style={cellStyle}>{lehrkraeft.gesperrtezeit}</td>
                            </tr>
                        ))}
                            
                        
                    </tbody>
                
                </table>
            </div>
        </div>
    )
};
const cellStyle: React.CSSProperties = {
  border: "1px solid #c6c7c9",
  padding: "0.5rem",
  alignItems: "center"
};

export default LehrkraftPage;