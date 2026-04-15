import React, { useState } from "react";
import {
  Alert,
  Button,
  Modal,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Game } from "../types/Game";

// Definición de los tipos de las propiedades (props) que el componente recibe desde el padre (Games.tsx)
type Props = {
  open: boolean;            // Controla si el modal está visible o no
  onClose: () => void;      // Función para cerrar el modal
  onGameSave: (game: Game) => void; // Función para guardar el juego en la lista del padre
};

export default function AddGameModal({ open, onClose, onGameSave }: Props) {
  // --- ESTADOS LOCALES ---
  // Guardan los valores de los inputs. Se inicializan como undefined.
  const [name, setName] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [year, setYear] = useState<number | undefined>();
  // Estados para el manejo de errores y feedback visual
  const [error, setError] = useState<boolean>(false);
  const [showSnackBar, setShowSnackBar] = useState(false);
  // Agregado de juegos con sus datos
  const agregarJuego = () => {
    // Validación básica: comprobamos que existan valores, no sean solo espacios y el año sea > 0
    if (
      !!name && name.trim().length > 0 &&
      !!category && category.trim().length > 0 &&
      !!year && year > 0
    ) {
      // Enviamos el objeto juego al componente padre
      onGameSave({
        name,
        category,
        year,
      });
      // Mostramos el mensaje de éxito (SnackBar)
      setShowSnackBar(true);
      // Limpiamos los campos para que la próxima vez el formulario esté vacío
      setName("");
      setCategory("");
      setYear(undefined);
      setError(false);
      // Cerramos el modal automáticamente tras el éxito
      onClose();
    } else {
      // Si la validación falla, activamos el estado de error
      setError(true);
    }
  };
  // Función que renderiza condicionalmente la alerta de error
  const getSuccessAlert = () => {
    if (error) {
      return <Alert severity="error">Por favor, rellena todos los campos correctamente.</Alert>;
    }
    return null;
  };
  // Esta variable será true si ALGUNO de los campos está vacío o es inválido
  const isButtonDisabled = !name || name.trim() === "";

  return (
    <>
      {/* Snackbar: Un mensaje flotante que aparece brevemente al guardar con éxito */}
      <Snackbar
         open={showSnackBar}
         autoHideDuration={2000}
         onClose={() => setShowSnackBar(false)}
         message="¡Juego agregado correctamente!"
      />
      {/* Modal: El contenedor principal del formulario */}
      <Modal open={open} onClose={onClose}>
        {/* Stack: Componente de MUI para organizar elementos en columna con espaciado */}
        <Stack
          spacing={2}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Centra el modal en pantalla
            width: { xs: '90%', sm: 600 }, // Responsivo: 90% en móvil, 600px en escritorio
            backgroundColor: "#fff",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography
              variant="h4"
              sx={{ mb: 2 }}
          >
            Agregar Juego
          </Typography>
          {/* Campos de entrada vinculados a sus respectivos estados locales */}
          <TextField
            label="Nombre del Juego"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Ej: Counter Strike 2"
          />

          <TextField
            label="Categoría"
            value={category || ""}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            variant="outlined"
            placeholder="Ej: Shooter / Acción"
          />

          <TextField
            label="Año de Lanzamiento"
            type="number"
            value={year || ""}
            onChange={(e) => setYear(Number(e.target.value))}
            fullWidth
            variant="outlined"
            placeholder="Ej: 2023"
          />

          <Button
            onClick={onClose}
            variant="outlined"
            fullWidth
            color="error" //Rojo para Cancelar la accion
          >
            CANCELAR
          </Button>

          {/* Botón que dispara la función de guardado */}
          <Button
             onClick={agregarJuego}
             variant="contained"
             size="large"
             sx={{ mt: 2 }}
             disabled={isButtonDisabled} // <- Boton disable hastas que el usuario ingrese algo
             color={!isButtonDisabled ? "success" : "primary"}
          >
            AGREGAR
          </Button>

          {/* Renderizado de la alerta en caso de error de validación */}
          {getSuccessAlert()}
        </Stack>
      </Modal>
    </>
  );
}
