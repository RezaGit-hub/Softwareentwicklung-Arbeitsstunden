type Fach ={
    id: string;
    name: string;
    kuerzel: string;
    raumanforderung: string;
    lehrkraefte: string;
    klassen: string;
}

const faecher: Fach[]=[
    {id: "1", name: "Mathematik", kuerzel: "Mat", raumanforderung:"alle Räume", lehrkraefte:"3", klassen: "2"},
    {id: "2", name: "Physik", kuerzel: "Ph", raumanforderung:"Physik Raum", lehrkraefte:"1", klassen: "1"},
    {id: "3", name: "Sport", kuerzel: "Sp", raumanforderung:"Sport Halle", lehrkraefte:"2", klassen: "1"},
    {id: "4", name: "Deutsch", kuerzel: "De", raumanforderung:"alle Räume", lehrkraefte:"3", klassen: "2"},

]

function FachPage(){
    return(
        <div>
            <p>Fäcer</p>
            <div>
                <table style={{borderCollapse: "collapse", width: "100%", marginTop:"1rem"}}>
                    <thead style={{background: "#edede9"}}>
                        <tr style={{width: "100%"}}>
                            <th style={cellStyle}>Name</th>
                            <th style={cellStyle}>Kürzel</th>
                            <th style={cellStyle}>Raum Anforderung</th>
                            <th style={cellStyle}>Lehrkräfte</th>
                            <th style={cellStyle}> Verfügbare Klassen</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faecher.map((faecher) =>(
                            <tr key={faecher.id}>
                                <td style={cellStyle}>{faecher.name}</td>
                                <td style={cellStyle}>{faecher.kuerzel}</td>
                                <td style={cellStyle}>{faecher.raumanforderung}</td>
                                <td style={cellStyle}>{faecher.lehrkraefte}</td>
                                <td style={cellStyle}>{faecher.klassen}</td>
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
export default FachPage;