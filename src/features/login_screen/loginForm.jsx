import * as React from 'react';
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function LoginForm() {
    return (
        <Card sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 2 }}>
            <CardContent>
                <Typography variant="h4" color='#821305' gutterBottom>
                    Iniciar Sesión
                </Typography>
                <TextField
                    fullWidth
                    label="Correo Electrónico"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    label="Contraseña"
                    type="password"
                    margin="normal"
                    variant="outlined"
                />
                 <FormControlLabel control={<Checkbox />} label="Mostrar contraseña" color='#821305' />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2,background: '#821305' }}
                >
                    Ingresar
                </Button>
            </CardContent>
        </Card>
    );
}