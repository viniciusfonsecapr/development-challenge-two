import React from "react";

import Header from "../header";
import ModalRegisterPacient from "../modal-registration";
import CardAndEdit from "../card-and-edit";
import Medico from '../../assets/Medico.webp'
import { ContainerInicial } from './styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Refresh } from "@mui/icons-material";

function HomePage() {

    function refreshPage() {
        window.location.reload();
    }

    return (
        <ContainerInicial>
            <Header />
            <Container id="second-container">
                <Box id="three-container">
                    <Typography id="text" variant="h5" gutterBottom sx={{ mt: 10, color: '#0085FF', fontWeight: 'bold' }}>👉Bem-vindo ao Cadastro Online</Typography>
                    <Typography id="text-1" sx={{ ml: 1, mt: 3, fontSize: 30, color: '#000', fontWeight: 'semibold' }}>
                        Cadastrar seus pacientes nunca
                        foi tão facil como agora  😁📝
                    </Typography>
                    <Typography id="text-2" sx={{ ml: 1, mt: 2, fontSize: 15, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'normal' }}>Sempre com dificuldade para cadastrar seus paciente? <br></br>
                        Agora seu problema acabou, Use o Cadastro Online e solucione seus problemas</Typography>
                    <img id="image-medic" src={Medico} alt="medico" style={{ borderRadius: '10px' }}></img>
                </Box>

                <Box>
                    <Container id="container-card-and-buttons" sx={{ mt: 4 }}>
                        <Typography id="text-register-pacient" sx={{ mt: 4, ml: '4%' }}>Cadastrar Pacientes</Typography>
                        <Box id="box-buttonAdd">
                            <ModalRegisterPacient></ModalRegisterPacient>
                            <Button sx={{marginTop:'30px'}} onClick={refreshPage}><Refresh></Refresh></Button>
                        </Box>
                        <Box id="card-pacients">
                            <CardAndEdit />
                        </Box>
                    </Container>
                </Box>
            </Container >
        </ContainerInicial >
    );
}

export default HomePage;