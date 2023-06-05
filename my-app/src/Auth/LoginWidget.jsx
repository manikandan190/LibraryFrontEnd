import {Redirect} from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";
import OktaSignInWidget from "./OktaSignInwidget";
const LoginWidget=({config})=>{
    const{oktaAuth,authState}=useOktaAuth();
    const onSuccess=(token)=>{
        oktaAuth.handleLoginRedirect(token);

    }
    const onError=(err)=>{
        console.log('sign in error: ',err);
    }
    if(!authState){
        return(
            <SpinnerLoading/>
            );

    }
    return authState.isAuthenticated ? 
    <Redirect to={{pathname:'/'}}/>:
    <OktaSignInWidget  config={config} onSuccess={onSuccess} onError={onError}/>
};

export default LoginWidget;