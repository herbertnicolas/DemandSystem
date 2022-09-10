import { useContext, useState } from "react";
import Header from "../../components/Header";
import { AuthContext } from "../../contexts/auth";

function Dashboard(){
    const { signOut } = useContext(AuthContext);

    return(
        <div>
            <Header/>
            <h1>PAGINA DE DASHBOARD</h1>
            <button onClick={() => {signOut()}}>DESLOGAR</button>
        </div>
    )
}
export default Dashboard;
