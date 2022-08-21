import { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css'
import logo from '../../assets/logo.png';

function SignUp(){
    const [ email, setEmail ] = useState('')
    const [ senha, setSenha ] = useState('')
    const [ nome, setNome ] = useState('')

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
                    <h1>Registro</h1>
                    <input type="text" placeholder=' Nome' value={nome} onChange={(e)=>{setNome(e.target.value)}}/> 
                    <input type="text" placeholder=' E-mail' value={email} onChange={(e)=>{setEmail(e.target.value)}}/> 
                    <input type="password" placeholder=' Senha' value={senha} onChange={(e)=>{setSenha(e.target.value)}}/>
                    <button type='submit'>Cadastrar</button>
                </form>
                <Link to="/">Já possuo uma conta</Link>
                    
            </div>
        </div>
    )
}

export default SignUp;