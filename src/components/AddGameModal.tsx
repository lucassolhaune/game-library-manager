import React, { useState } from "react";
import {Button, Typography, Box, Container, TextField, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import BackButton from '../components/BackButton';

export default function Add() {
  const [listaJuegos, setListaJuegos] = useState<string[]>([]);

  const [juegos, setJuegos] = useState<string[]>([]);
  
  const [nombreJuego, setNombreJuego] = useState("");

// FUNCIÓN PARA AGREGAR
    const agregarJuego = () => {
    // Verificamos que no esté vacío
    console.info({
      nombreJuego,
      nombreJuegoTrimmeado: nombreJuego.trim()
    })
    if (nombreJuego.trim() !== "") { //.trim(), Borra los espacios vacios en una cadena de texto.
      // Agregamos el nuevo juego copiando los que ya estaban (...juegos)
      setJuegos([...juegos, nombreJuego]);
      // Limpiamos el campo de texto para escribir uno nuevo
      setNombreJuego(""); 
    }
  };
  // FUNCIÓN PARA ELIMINAR UNO ESPECÍFICO
  const eliminarJuego = (indexAEliminar: number) => {
    // Filtramos la lista: nos quedamos con todos EXCEPTO el que tocaste
    const nuevaLista = juegos.filter((_, index) => index !== indexAEliminar);
    setJuegos(nuevaLista);
  };
  
  return (
    <Container maxWidth="sm">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '85vh', padding: '40px 0' }}>
        
        <Box sx={{ 
          width: '100%', padding: '40px', borderRadius: '24px', 
          background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)',
          backdropFilter: 'blur(15px)', border: '1px solid rgba(105, 171, 207, 0.2)', 
          boxShadow: '0 20px 50px rgba(27, 1, 46, 0.5), 0 0 40px rgba(105, 171, 207, 0.15)', 
          display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
          
          {/* EL BOTÓN DE VOLVER */}
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-start', mb: 2 }}>
            <BackButton />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', mb: 4, display: 'flex', alignItems: 'center', gap: 1 }}>
            <VideogameAssetIcon fontSize="large" sx={{ color: '#69ABCF' }} /> 
            Añadir a Biblioteca
          </Typography>

          <Box sx={{ width: '100%', display: 'flex', gap: 2, mb: 4 }}>
            <TextField 
            value={nombreJuego}
            onChange={(e) => setNombreJuego(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="Ej: Counter Strike 2"
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  borderRadius: '12px',
                  '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
                  '&:hover fieldset': { borderColor: 'rgba(105, 171, 207, 0.5)' },
                  '&.Mui-focused fieldset': { borderColor: '#69ABCF' },
                }
              }}
            />
            <Button
            onClick={agregarJuego}
              variant="contained" 
              sx={{ 
                backgroundColor: '#69ABCF', borderRadius: '12px', minWidth: '120px',
                fontWeight: 'bold', '&:hover': { backgroundColor: '#5891b0' } 
              }}
            >
              AGREGAR
            </Button>
          </Box>

          {/* LISTA DE JUEGOS  */}
          <Box sx={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', minHeight: '150px', p: 2 }}>
            <Typography variant="overline" sx={{ color: '#9ca3af', pl: 2 }}>
              Juegos agregados recientemente
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}