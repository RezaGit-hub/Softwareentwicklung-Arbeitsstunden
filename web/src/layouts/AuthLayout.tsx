import { Outlet} from "react-router-dom";
import "./MainLayout.css"


function AuthLayout(){
    return(
    <div className="layout">
        <header className="layout-header">
            <h1 className="layout-logo">Stundenplannung</h1>
        </header>
        <div style={{minHeight: "100vh", display: "flex", flexDirection:"column"}}>
            <main style={{flex: 1, padding: "2rem"}}>
                <Outlet/>
            </main>
        </div>
        <footer>
            <p>ss-2026 Software Projekt</p>
        </footer>
    </div>
    )
}

export default AuthLayout;