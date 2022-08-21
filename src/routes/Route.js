import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../pages/contexts/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    const {signed, loading} = useContext(AuthContext); //buscando variaveis pelo AuthContext

    if(loading){
        return(
            <div>

            </div>
        )
    }

    if(!signed && isPrivate){
        return <Redirect to="/"/>
    }
    if(signed && !isPrivate){
        return <Redirect to="/dashboard"/>
    }
    
    return(
        <Route
            {...rest}
            render={ props => (
                <Component {...props} />
            )}
        />
    )
}