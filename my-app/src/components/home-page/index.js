import React from "react";
import { useForm } from "react-hook-form";

import { ContainerInicial } from './styles'
import Medico from '../../assets/Medico.webp'
import Header from "../header";

import Container from '@mui/material/Container'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 400,
    bgcolor: 'background.paper',
    borderRadius: '6px',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)',
    boxShadow: 24,
    p: 4,
};


const styledInputLabel = {
    marginTop: '6px',
    marginLeft: '15px',
    marginBottom: '2px',

}

const styledInputLabelRight = {
    marginTop: '6px',
    marginLeft: '2px',
    marginBottom: '2px',

}

const styledInputLeft = {
    marginTop: '5px',
    marginLeft: '15px',
    marginBottom: '5px',
    height: '30px',
}

const styledInputRight = {
    marginRight: '20px',
    marginTop: '5px',
    marginLeft: '2px',
    marginBottom: '5px',
    height: '30px',
}

const styledInputRightState = {
    width: '100px',
    height: '30px',
    ml: '2px',
    mt: '5px',
    mr:'6px',
}





function HomePage() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        mt: 15,
                        width: '80%',
                        height: '500px',
                        borderRadius: '15px',
                        border: '0.2px solid rgba(0, 0, 0, 0.15)',
                        background: 'linear-gradient(127.73deg, rgba(228, 228, 228, 0.8) 0%, rgba(213, 214, 227, 0.75) 0.01%, rgba(202, 203, 220, 0.464) 29.92%, rgba(201, 202, 222, 0.736) 59.68%, rgba(204, 205, 219, 0.56) 78.69%, rgba(203, 204, 224, 0) 98.85%);'
                    }}>
                        <Typography sx={{ mt: 3, fontSize: 25, fontWeight: 'semibold' }}>Pacientes</Typography>
                        <Stack
                            component="form"
                            onSubmit={handleSubmit(onSubmit)}
                            sx={{position:'absolute', mt: 12, mr:80 }}

                        >
                            <Button onClick={handleOpen} sx={{border:'1px solid '}}>Cadastrar pacientes</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:'center', mt: 2 }}>
                                        Cadastro de Pacientes
                                    </Typography>
                                    <Stack sx={{ float: 'left' }}>
                                        <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Nome</InputLabel>
                                        <OutlinedInput sx={styledInputLeft}></OutlinedInput>

                                        <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Sexo</InputLabel>
                                        {/* AQUI VAI O CHECKBOX DE SEXO DO PACIENTE */}

                                        <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Email</InputLabel>
                                        <OutlinedInput sx={styledInputLeft}></OutlinedInput>

                                        <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Data de Nascimento</InputLabel>
                                        <OutlinedInput sx={styledInputLeft}></OutlinedInput>
                                    </Stack>
                                    <Stack sx={{ float: 'right' }}>
                                        <InputLabel htmlFor="component-simple" sx={styledInputLabelRight}>Endreço</InputLabel>
                                        <OutlinedInput sx={styledInputRight} ></OutlinedInput>
                                        <OutlinedInput sx={styledInputRight}></OutlinedInput>
                                        <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                                            <OutlinedInput sx={styledInputRightState}></OutlinedInput>
                                            <OutlinedInput sx={styledInputRightState}></OutlinedInput>
                                        </Stack>

                                        <InputLabel htmlFor="component-simple" sx={{mt:2}}>Observações</InputLabel>
                                        {/* CAMBO DE OBSERVAÇÕES COM TEXTO LIBRE */}
                                    </Stack>



                                </Box>
                            </Modal>
                        </Stack>
                    </Container>

                </Box>

            </Container>
        </ContainerInicial >
    );
}

export default HomePage;