import { useState } from "react";
import Button from '@mui/material/Button'


export default function Games() {
  return (
    <Button 
      variant="text" 
      color="primary"
      onClick={() => alert ("Funciona")}
    >
      Test
    </Button>
  )
}
