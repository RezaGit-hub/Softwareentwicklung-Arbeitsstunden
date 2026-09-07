import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.css"

function AdminLayout(){
    return(
        <div className="layout">
            <header className="layout-header">
                <h1 className="layout-logo">Studenplanumg</h1>
            </header>
        
            <div className="admin-body">   
                <nav className="layout-nav">
                    <Link to={"/grunddaten"}>Grund Daten</Link>
                    <Link to={"/plannen"}>Plannung</Link>
                    <Link to={"/vetretung"}>Vertretung</Link>
                    <Link to={"/dashboard"}>Mein Dashboard</Link>
                    <Link to={"/user"}>User Verwaltung</Link>
                </nav>
                <main className="layout-content">
                    <Outlet />
                </main>
            </div> 
            
            <footer className="layout-footer">
               <p>© SS2026 Software Projekt </p>
            </footer>
            
        </div>
    )
};

export default AdminLayout;