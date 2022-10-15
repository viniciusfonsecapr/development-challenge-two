import React, {useEffect, useState} from "react";
import axios from 'axios'

import Header from "../header";
import ModalCadastro from "../modal-registration";
import InputSearch from '../input-search'
import CardRegistration from "../card-registration";

import Medico from '../../assets/Medico.webp'
import { ContainerInicial } from './styles'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function HomePage() {



    // useEffect(() => {
    //     axios.get('http://localhost:3005/registration')
    //     .then((response) => {
    //         console.log(response.data)
    //     });
    // }, []);


    return (
        <ContainerInicial>
            <Header />
            <Container >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    flexDirection: 'column'
                }}>
                    <Typography variant="h5" gutterBottom sx={{ ml: 10, mt: 10, color: '#0085FF', fontWeight: 'bold' }}>👉Bem-vindo ao Cadastro Online</Typography>
                    <Typography sx={{ ml: 1, mt: 3, fontSize: 30, color: '#000', fontWeight: 'semibold' }}>
                        Cadastrar seus pacientes <br></br>
                        nunca foi tão facil como agora 😁📝<br></br>
                        Faça busca por nome do paciente<br></br>
                        no campo de pesquisa abaixo, <br></br>ou cadastre seu paciente agora mesmo. ⬇
                    </Typography>
                    <Typography sx={{ ml: 1, mt: 2, fontSize: 15, color: 'rgba(0, 0, 0, 0.7)', fontWeight: 'normal' }}>Sempre com dificuldade para cadastrar seus paciente? <br></br>
                        Agora seu problema acabou, Use o Cadastro Online e solucione seus problemas</Typography>
                </Box>
                <Box sx={{ position: 'absolute', mt: '-30%', ml: '55%', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
                    <img src={Medico} alt="medico" style={{ width: '400px', height: '400px', borderRadius: '10px' }}></img>
                </Box>

                <Box>
                    <Container sx={{
                        mt: 15,
                        width: '80%',
                        height: '500px',
                        borderRadius: '15px',
                        border: '0.2px solid rgba(0, 0, 0, 0.15)',
                        background: 'linear-gradient(127.73deg, rgba(244, 245, 255, 0.8) 0%, rgba(247, 247, 255, 0.75) 0.01%, rgba(255, 255, 255, 0.464) 29.92%, rgba(244, 244, 244, 0.736) 59.68%, rgba(225, 226, 238, 0.56) 78.69%, rgba(234, 235, 247, 0) 98.85%);'
                    }}>
                        <Typography sx={{ display: 'block', textAlign: 'center', mt: 3, fontSize: 25, fontWeight: 'semibold' }}>Pacientes</Typography>
                        <Box sx={{display:'flex', flexDirection:'row', ml:12}}>
                            <ModalCadastro></ModalCadastro>
                            <InputSearch></InputSearch>
                        </Box>
                        <Box>
                            <CardRegistration users=""/>
                        </Box>

                    </Container>

                </Box>

            </Container >
        </ContainerInicial >
    );
}

export default HomePage;