import { Button, Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import AddGameModal from "../components/AddGameModal";
import { Game } from "../types/Game";
import BackButton from "../components/BackButton";

export default function Games() {
  const [games, setGames] = useState<Game[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "game name", headerName: "Game name", width: 130 },
    {
      field: "year",
      headerName: "Year",
      type: "number",
      width: 90,
    },
    {
      field: "category",
      headerName: "Category",
      description: "Esta columna es de categoria",
      sortable: false,
      width: 160,
    },
  ];
  const paginationModel = { page: 0, pageSize: 10 };

  return (
    <Container>
      <Button
          variant="contained"
          color="primary"
          onClick={() => setModalOpen(true)}>
          Agregar Juego
      </Button>
        <BackButton

        />
      <AddGameModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onGameSave={(game: Game) => {
          setGames([...games, { ...game, id: Date.now()  }]) // Date.now() Genera un id unico
        }}
      />
      <DataGrid
        sx={{ height: 600,width: '100%' }}
        rows={games}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </Container>
  );
}
