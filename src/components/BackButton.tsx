import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Router, Link as RouterLink } from 'react-router-dom';

export default function BackButton() {
  return (
      <Button
          component={RouterLink}
          to="/home"
          startIcon={<ArrowBackIcon/>}
          color="primary"
      >
        Volver al Inicio
      </Button>
  );
}