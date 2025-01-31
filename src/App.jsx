import './App.css'
import React from 'react'
import LoginForm from './features/login_screen/loginForm'
import ResponsiveAppBar from './core/appBar/appBar'

function App() {

  return (
    <>    
      <ResponsiveAppBar/>
      <LoginForm/>
    </>
  )
}

export default App
