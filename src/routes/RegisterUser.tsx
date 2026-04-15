import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Stack, Alert, Snackbar } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'; // Importamos el icono de check para el Alert de éxito

export default function RegisterUser() {
  const navigate = useNavigate();

  // --- ESTADOS PARA LOS CAMPOS DEL FORMULARIO ---
  const [username, setUsername] = useState(''); // Estado para el usuario
  const [password, setPassword] = useState(''); // Estado para la password

  // --- ESTADOS PARA EL FEEDBACK VISUAL (ALERTAS Y SNACKBAR) ---
  const [alertMessage, setAlertMessage] = useState(''); // Mensaje a mostrar en el Alert
  const [alertSeverity, setAlertSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('info'); // Tipo de Alert
  const [showAlert, setShowAlert] = useState(false); // Controla la visibilidad del Alert
  const [showSnackbar, setShowSnackbar] = useState(false); // Controla la visibilidad del Snackbar de éxito

  // FUNCIÓN PARA MANEJAR EL REGISTRO
  const handleRegister = () => {
    // 1. Limpiamos cualquier mensaje o alerta anterior
    setShowAlert(false);
    setShowSnackbar(false);
    setAlertMessage('');

    // Obtenemos los valores de los campos sin espacios al inicio/final
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // 2. Lógica de validación
    if (trimmedUsername !== '' && trimmedPassword !== '') {
      //CASO DE ÉXITO: Ambos campos completados
      console.log("Registrando usuario:", trimmedUsername);

      setShowSnackbar(true); // Mostramos el Snackbar de éxito

      // Limpiamos los campos después del registro exitoso
      setUsername('');
      setPassword('');

      // Navegamos al Login después de un pequeño retraso para que se vea el Snackbar
      setTimeout(() => {
        navigate('/');
      }, 1500); // El Snackbar se mostrará por 1.5 segundos

    } else if (trimmedUsername === '' && trimmedPassword === '') {
      // --- CASO DE ERROR: Ambos campos vacíos ---
      setAlertMessage('Por favor, ingresa un usuario y una contraseña.');
      setAlertSeverity('error');
      setShowAlert(true);
    } else {
      // --- CASO DE ADVERTENCIA: Solo uno de los campos está vacío ---
      setAlertMessage('Debes ingresar tanto el usuario como la contraseña.');
      setAlertSeverity('warning');
      setShowAlert(true);
    }
  };

  return (
      <Container maxWidth="xs">
        {/* Snackbar para mensajes de éxito (aparece arriba y desaparece solo) */}
        <Snackbar
            open={showSnackbar}
            autoHideDuration={2000} // Duración en milisegundos
            onClose={() => setShowSnackbar(false)} // Función para cerrar el Snackbar
            message="¡Usuario registrado con éxito!"
        />

        <Stack spacing={3} sx={{ mt: 5 }}> {/* Espaciado entre elementos y margen superior */}

          <Typography
              variant="h4"
              component="h2"
              align="center"
              sx={{ mb: 2 }} // Margen inferior para el título
          >
            Crear Cuenta
          </Typography>

          {/* Campo de texto para el nuevo usuario */}
          <TextField
              label="Nuevo Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth // Ocupa todo el ancho disponible
              variant="outlined" // Estilo del TextField
          />

          {/* Campo de texto para la nueva contraseña */}
          <TextField
              label="Nueva Contraseña"
              type="password" // Oculta los caracteres
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              variant="outlined"
          />

          {/* Alert para mostrar errores o advertencias (aparece debajo de los campos) */}
          {showAlert && (
              <Alert severity={alertSeverity} icon={alertSeverity === 'success' ? <CheckIcon fontSize="inherit" /> : undefined}>
                {alertMessage}
              </Alert>
          )}

          {/* Botón para registrarse */}
          <Button
              variant="contained"
              onClick={handleRegister}
              fullWidth
              size="large" // Tamaño grande para el botón principal
              sx={{ mt: 2 }} // Margen superior
          >
            REGISTRARSE
          </Button>

          {/* Botón para volver al Login */}
          <Button
              variant="text"
              onClick={() => navigate('/')}
              fullWidth
          >
            VOLVER AL LOGIN
          </Button>

        </Stack>

      </Container>
  );
}