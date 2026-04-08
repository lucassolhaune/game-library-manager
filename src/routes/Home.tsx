import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box 
        sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          minHeight: '85vh', // Centra el panel verticalmente
          padding: '40px 0'
        }}
      >
        
        {/* --- EL PANEL CENTRAL FLOTANTE (Glassmorphism) --- */}
        <Box 
          sx={{ 
            width: '100%',
            maxWidth: '900px', // Un panel ancho como en la imagen
            padding: '60px 40px',
            textAlign: 'center',
            borderRadius: '24px', // Bordes bien redondeados
            
            // EL EFECTO DE VIDRIO ESMERILADO
            background: 'linear-gradient(135deg, rgba(31, 41, 55, 0.6) 0%, rgba(17, 24, 39, 0.8) 100%)',
            backdropFilter: 'blur(15px)', // Desenfoque del fondo
            
            // DETALLES FASCINANTES (Borde sutil y sombra de neón)
            border: '1px solid rgba(255, 255, 255, 0.1)', // Línea fina
            boxShadow: '0 20px 50px rgba(27, 1, 46, 0.5), 0 0 30px rgba(14, 118, 156, 0.1)', // Sombra profunda y glow sutil
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          
          {/* 1. EL LOGO (Integrado con sombra de neón cian) */}
          <img 
            src={logo} 
            alt="Logo GLM" 
            style={{ 
              width: '520px', 
              marginBottom: '40px',
              filter: 'drop-shadow(0px 0px 15px rgba(105, 188, 207, 0.3))' // Brillo sutil
            }} 
          />

          {/* 2. EL TÍTULO (h1) - Con resalte de color */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: '900', // Letra re gruesa
              color: 'white', 
              fontSize: { xs: '2.5rem', md: '3.8rem' }, // Responsivo
              mb: 2,
              textShadow: '0 2px 10px rgba(165, 206, 235, 0.5)' // Sombra para que se lea mejor
            }}
          >
            BIENVENIDOS A <span style={{ color: '#69ABCF', textShadow: '0 0 15px rgba(105, 171, 207, 0.5)' }}>GLM</span>
          </Typography>

          {/* 3. EL SUBTÍTULO (Descripción) */}
          <Typography 
            variant="h6" 
            sx={{ 
              color: '#d1d5db', // Gris claro/blanco sucio
              mb: 7, // Mucho espacio para los botones
              maxWidth: '650px',
              lineHeight: 1.7,
              fontWeight: '400'
            }}
          >
            La plataforma definitiva para gestionar tu biblioteca de juegos personal sin complicaciones. Tu colección, tu control.
          </Typography>

          {/* 4. LA CAJA DE BOTONES DE ACCIÓN (Exactos a la imagen) */}
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 4, // Más espacio entre ellos
              flexDirection: { xs: 'column', sm: 'row' }
            }}
          >
            
            {/* BOTÓN PRINCIPAL: EMPEZAR A AÑADIR (Azul brillante con icono +) */}
            <Button 
              component={Link} 
              to="/add" 
              variant="contained" 
              size="large"
              startIcon={<AddIcon />} // Icono de '+' a la izquierda
              sx={{ 
                backgroundColor: '#69ABCF', // El azul exacto del logo
                padding: '14px 35px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                borderRadius: '50px', // Botón 'pill' (redondeado completo)
                boxShadow: '0 4px 15px rgba(105, 171, 207, 0.4)', // Sombra de color
                textTransform: 'none', // No poner todo en mayúsculas
                '&:hover': { 
                  backgroundColor: '#5891b0',
                  boxShadow: '0 6px 20px rgba(105, 171, 207, 0.6)' 
                } 
              }}
            >
              EMPEZAR A AÑADIR
            </Button>
            
            {/* BOTÓN SECUNDARIO: VER MI LISTA (Outlined blanco con icono de lista) */}
            <Button 
              component={Link} 
              to="/games" 
              variant="outlined" // Solo borde
              size="large"
              startIcon={<ListAltIcon />} // Icono de lista
              sx={{ 
                color: 'white', 
                borderColor: 'rgba(255, 255, 255, 0.4)', // Borde transparente
                padding: '14px 35px',
                fontSize: '1.1rem',
                borderRadius: '50px', // Botón 'pill'
                textTransform: 'none',
                '&:hover': { 
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)' // Un fondo muy sutil
                } 
              }}
            >
              VER MI LISTA
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}