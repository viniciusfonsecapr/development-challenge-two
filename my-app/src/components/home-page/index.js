import React from "react";

import Header from "../header";
import ModalRegisterPacient from "../modal-registration";
import CardAndEdit from "../card-and-edit";
import Medico from '../../assets/Medico.webp'
import { ContainerInicial } from './styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function HomePage() {

 
    return (
        <ContainerInicial>
            <Header />
            <Container id="second-container">
                <Box id="three-container" sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'column'
                }}>
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
                    <Container id="container-card-and-buttons" sx={{
                        mt: 4,
                        width: '100%',
                        minHeight: '100vh',
                        borderRadius: '15px',
                        border: '0.2px solid rgba(0, 0, 0, 0.15)',
                        background: 'linear-gradient(127.73deg, rgba(244, 245, 255, 0.8) 0%, rgba(247, 247, 255, 0.75) 0.01%, rgba(255, 255, 255, 0.464) 29.92%, rgba(244, 244, 244, 0.736) 59.68%, rgba(225, 226, 238, 0.56) 78.69%, rgba(234, 235, 247, 0) 98.85%);'
                    }}>
                        <Typography id="text-register-pacient" sx={{ textAlign: 'center', mt: 4, ml: '4%', fontSize: 25, fontWeight: 'bold' }}>Cadastrar Pacientes</Typography>
                        <Box id="box-buttonAdd" sx={{ display: 'flex', flexDirection: 'row' }}>
                            <ModalRegisterPacient></ModalRegisterPacient>
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