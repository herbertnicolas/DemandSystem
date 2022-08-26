import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth";

function Dashboard(){
    const { signOut } = useContext(AuthContext);

    return(
        <div>
            <h1>PAGINA DE DASHBOARD</h1>
            <button onClick={() => {signOut()}}>DESLOGAR</button>
        </div>
    )
}
export default Dashboard;
