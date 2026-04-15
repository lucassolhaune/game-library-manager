// src/routes/Login.tsx
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Alert,
    CircularProgress,
    Stack
} from '@mui/material';

export default function Login (){
    //Este hook lo voy a usar para navegar al home
    const navigate = useNavigate();
    //Defino estados para usuario y contraseña
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    //Definos dos estados más, uno de error y otro de cargando
    const [error, setError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    //Función que se ejecuta al intentar entrar
    const handleLogin = () =>{
        //Se fija que los campos NO esten vacío y si el usuario pone espacios los saca
        if(username.trim() !== '' && password.trim() !== ''){
            setError(false);
            setLoading(true);

            //Simulamos que demora dos segundos en entrar
            setTimeout(() =>{
                navigate('/home');
                }, 2000)
        }else {
            //Si están vacíos los campos, mostramos el error
            setError(true);
        }
    };
    return(
        <Container maxWidth="xs">
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h4" sx={{ mb: 3 }}>Login</Typography>
                <Stack spacing={2} sx={{ width: '100%' }}>
                    {/* Campo de Usuario */}
                    <TextField
                        label="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                    {/* Campo de Contraseña */}
                    <TextField
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    {/* Botón de Entrar */}
                    <Button
                        variant="contained"
                        onClick={handleLogin}
                        disabled={loading} // Se deshabilita mientras carga
                    >
                        {/*Si loading es true*/}
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Entrar'}
                    </Button>
                    {/* Alerta de Error (se muestra solo si error es true) */}
                    {error && (
                        <Alert severity="error">Por favor, completa los datos</Alert>
                    )}
                    <Typography
                        variant="h6"
                        component="h1">
                        ¿No tienes una cuenta?
                    </Typography>
                    <Button
                        onClick={() => navigate('/registerUser')} // <--- CAMBIAR A ESTO
                        variant="outlined"
                        fullWidth
                        disabled={loading}
                    >
                        Crear cuenta nueva
                    </Button>
                </Stack>
            </Box>
        </Container>
    )
}