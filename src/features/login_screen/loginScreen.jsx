import React from 'react'
import LoginForm from './loginForm'
import ResponsiveAppBar from "../../core/appBar/appBar";

function LoginScreen(){

    return(
     <>    
      <ResponsiveAppBar/>
      <LoginForm/>
    </>
    )
}

export default LoginScreen