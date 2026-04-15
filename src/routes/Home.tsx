import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import { Container, Button, Box, Typography } from '@mui/material';
import ListAltIcon from '@mui/icons-material/ListAlt';

export default function Home() {
    return (
        <Container maxWidth="lg">
            <Typography variant="h1" component="h2" align="center">
                Bienvenidos!
            </Typography>
            <Box
                sx={{
                        bgcolor: 'primary.black',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '85vh', // Aquí es donde se define el "centro" vertical
                        padding: '40px 0'
                    }}
                >
                <Button
                    component={RouterLink}
                    to="/games"
                    variant="contained"
                    size="large"
                    startIcon={<ListAltIcon />}
                    >
                    VER MI LISTA
                </Button>
            </Box>
        </Container>
    );
}