import React from "react";

import { ContainerInicial } from './styles'
import Medico from '../../assets/Medico.webp'
import Header from "../header";

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typograph from '@mui/material/Typography';

function HomePage() {

    return (
        <ContainerInicial>
            <Header />
            <Container >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'column'
                }}>
                    <Typograph variant="h5" gutterBottom sx={{ml:10, mt:10,color: '#0085FF', fontWeight: 'bold' }}>👉Bem-vindo ao Cadastro Online</Typograph>
                    <Typograph sx={{ml:1, mt:3,fontSize: 30, color: '#000', fontWeight: 'semibold' }}>
                        Cadastrar seus pacientes <br></br>
                        nunca foi tão facil como agora 😁📝<br></br>
                        Faça busca por nome do paciente<br></br>
                        no campo de pesquisa abaixo, <br></br>ou cadastre seu paciente agora mesmo. ⬇
                    </Typograph>
                    <Typograph sx={{ml:1, mt:2,fontSize: 15, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'normal' }}>Sempre com dificuldade para cadastrar seus paciente? <br></br>
                                Agora seu problema acabou, Use o Cadastro Online e solucione seus problemas</Typograph>
                </Box>
                <Box sx={{ position: 'absolute', mt: '-30%', ml: '55%', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                    <img src={Medico} alt="medico" style={{ width: '400px', height: '400px', borderRadius: '10px' }}></img>
                </Box>

                <Box>
                    <Container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    mt:15,
                    width:'80%',
                    height:'500px',
                    borderRadius:'15px',
                    border: '0.2px solid rgba(0, 0, 0, 0.15)',
                    background:'linear-gradient(127.73deg, rgba(228, 228, 228, 0.8) 0%, rgba(213, 214, 227, 0.75) 0.01%, rgba(202, 203, 220, 0.464) 29.92%, rgba(201, 202, 222, 0.736) 59.68%, rgba(204, 205, 219, 0.56) 78.69%, rgba(203, 204, 224, 0) 98.85%);'
                }}>

                    </Container>
                </Box>

            </Container>
        </ContainerInicial >
    );
}

export default HomePage;