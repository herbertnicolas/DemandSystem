import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css'
import logo from '../../assets/logo.png';

function SignIn(){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')

    function handleSubmit(e){
        e.preventDefault(); //pra não atualizar a pagina
        alert('CLICOU');
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="logo"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Entrar</h1>
                    <input type="text" placeholder=' E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
                    <input type="password" placeholder=' Senha' value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>
                    <button type='submit'>Acessar</button>
                </form>
                <Link to="/register">Crie uma conta</Link>
                    
            </div>
        </div>
    )
}

export default SignIn;