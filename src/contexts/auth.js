import { createContext, useEffect, useState } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

function AuthProvider({children}){
    const [ user, setUser ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ loadingAuth, setLoadingAuth ] = useState(false)

    useEffect(()=>{
        //buscando pra saber se tem usuario no banco de dados
        function loadStorage(){
            const storageUser = localStorage.getItem('SistemaUser'); //buscando item no banco com a key 'SistemaUser'

            if(storageUser){
                setUser(JSON.parse(storageUser)); //convertendo objeto -> string
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])

    //funcao pra salvar o item no localStorage
    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data));
    }
    async function signUp(nome, email, senha){
        setLoadingAuth(true); //'tem alguem tentando cadastrar/logar'
        //criando usuario
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(async(value)=>{
            let uid = value.user.uid;
            //jogando usuario no banco de dados
            await firebase.firestore().collection('users')
            .doc(uid)
            .set({
                nome: nome,
                avatarUrl: null
            })
            //compartilhando os dados do usuario pro resto da app
            .then(()=>{
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    avatarUrl: null 
                };
                setUser(data);
                storageUser(data);
                setLoadingAuth(false);
            })
        })
        .catch((error)=>{
            console.log(error);
            setLoadingAuth(false);
        })
    }
    
    return(
        //listando em value={} todas as variaveis que serao compartilhadas pelo AuthContext
        <AuthContext.Provider value={{signed: !!user, user, loading, signUp}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;