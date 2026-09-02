import { Outlet } from "react-router-dom";

function AuthLayout(){
    return(
        <div style={{minHeight: "100vh", display: "flex", flexDirection:"column"}}>
            <main style={{flex: 1, padding: "2rem"}}>
                <Outlet/>
            </main>
        </div>
    )
}

export default AuthLayout;