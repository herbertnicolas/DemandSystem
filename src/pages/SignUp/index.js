import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import './signup.css'
import logo from '../../assets/logo.png';

function SignUp(){
    const [ email, setEmail ] = useState('');
    const [ senha, setSenha ] = useState('');
    const [ nome, setNome ] = useState('');

    const { signUp } = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault(); //pra não atualizar a pagina
        
        if(nome !== '' && email !== '' && senha !== ''){
            if(senha.length < 6){
                alert("A senha inserida deve ter ao menos 6 caracteres.")
            }
            else{
                signUp(nome, email, senha);
            }
        }
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