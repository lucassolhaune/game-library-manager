import { Button, Typography, Paper, Box, Stack } from "@mui/material";
import { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

export default function Add() {
  const [cantidadJuegos, setCantidadJuegos] = useState(0);

  const incrementarContador = () => setCantidadJuegos(cantidadJuegos + 1); 
  
  const decrementarContador = () => {
    if (cantidadJuegos > 0) { 
      setCantidadJuegos(cantidadJuegos - 1); 
    } else {
      alert("No hay más juegos para eliminar");
    }
  };

  const reiniciarContador = () => setCantidadJuegos(0); 

  return (
    <Box sx={estilos.contenedorPrincipal}>
      {/* Usamos un Paper con fondo semi-transparente para que luzca el efecto del fondo */}
      <Paper elevation={0} sx={estilos.tarjetaOscura}>
        
        <Typography variant="h4" sx={estilos.tituloTexto}>
          Añadir Juegos
        </Typography>

        <Box sx={estilos.visorContador}>
          <Typography variant="overline" sx={{ color: '#aaa' }}>
            Total en la lista
          </Typography>
          <Typography variant="h2" sx={estilos.numeroResaltado}>
            {cantidadJuegos}
          </Typography>
        </Box>

        <Stack spacing={2.5}>
          <Button 
            variant="contained" 
            startIcon={<AddCircleOutlineIcon />}
            onClick={incrementarContador}
            sx={estilos.botonAgregar}
          > 
            Agregar Juego
          </Button>
          
          <Button 
            variant="outlined" 
            startIcon={<RemoveCircleOutlineIcon />}
            onClick={decrementarContador}
            sx={estilos.botonEliminar}
          > 
            Eliminar uno 
          </Button>
          
          <Button 
            variant="text" 
            startIcon={<DeleteSweepIcon />}
            onClick={reiniciarContador}
            sx={{ color: '#888', '&:hover': { color: '#fff' } }}
          > 
            Vaciar lista completa
          </Button>
        </Stack>

      </Paper>
    </Box>
  );
}

const estilos = {
  contenedorPrincipal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    // Aquí simulamos el fondo oscuro con un efecto de degradado
    background: 'radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%)',
    padding: 3
  },
  tarjetaOscura: {
    padding: 5,
    borderRadius: 6,
    maxWidth: 400,
    width: '100%',
    textAlign: 'center',
    // Efecto de cristal para que se vea moderno sobre fondo oscuro
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
  },
  tituloTexto: {
    marginBottom: 4,
    fontWeight: 600,
    color: '#ffffff',
    letterSpacing: '1px'
  },
  visorContador: {
    marginBottom: 4,
    padding: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 4,
    border: '1px solid rgba(105, 171, 207, 0.2)', // El color azul que te gusta, pero sutil
  },
  numeroResaltado: {
    fontWeight: 'bold',
    color: '#69ABCF', // Tu color característico
    textShadow: '0 0 15px rgba(105, 171, 207, 0.5)'
  },
  botonAgregar: {
    backgroundColor: '#69ABCF',
    padding: '12px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#5891b0',
      transform: 'scale(1.02)'
    },
    transition: 'all 0.2s'
  },
  botonEliminar: {
    color: '#ff5252',
    borderColor: '#ff5252',
    '&:hover': {
      borderColor: '#ff1744',
      backgroundColor: 'rgba(255, 82, 82, 0.05)'
    }
  }
};