import { useContext } from "react";
import { FiFileText, FiSettings, FiUsers } from "react-icons/fi";
import { AuthContext } from "../../contexts/auth";
import avatar from '../../assets/avatar.png'
import './header.css';
import { Link } from "react-router-dom";

function Header(){
    const { user } = useContext(AuthContext);

    return(
        <div>
            <div className="sidebar">
                <div className="avatar">
                    <img src={user.avatarUrl === null ? avatar : user.avatarUrl} />
                </div>
                
                <Link to="/dashboard">
                    <FiFileText size="24"/>
                    Chamados
                </Link>             
                <Link to="/customers">
                    <FiUsers size="24"/>
                    Clientes
                </Link>             
                <Link to="/profile">
                    <FiSettings size="24"/>
                    Configurações
                </Link>
            </div>
        </div>
    )
}

export default Header