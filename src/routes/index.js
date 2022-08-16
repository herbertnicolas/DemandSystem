import { Switch } from "react-router-dom";
import SignIn from "../pages/Signin";
import SignUp from "../pages/SignUp";
import Route from './Route';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" comp/>
        </Switch>
    )
}