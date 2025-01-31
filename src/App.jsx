import './App.css'
import React from 'react'
import LoginScreen from './features/login_screen/loginScreen'
import CrudScreen from './features/crud_screen/crudScreen'
import { Typography } from "@mui/material";

import ResponsiveAppBar from "../src/core/appBar/appBar";

function App() {
  return (
    <>

<ResponsiveAppBar/>    
    <Typography variant="h5" color='#821305' gutterBottom>
        ESPACIOS PUBLICITARIOS
      </Typography>
    <CrudScreen />
  
    <LoginScreen/>
    </>
  )
}

export default App