import React, { useContext } from "react";
import { UserContext } from "../../hooks/useContext";

import { ContainerInicial } from './styles'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import CloseIcon from '@mui/icons-material/Close';
import HowToRegIcon from '@mui/icons-material/HowToReg';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 400,
    bgcolor: 'background.paper',
    boxShadow: '0px 12px 32px rgba(43, 68, 106, 0.12)',
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


function ModalCadastro() {

    const { dataForm, handleChange, handleClick } = useContext(UserContext);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ContainerInicial>
            <Stack sx={{ display: 'flex', mt: 5, width: '200px' }}>
                <form>
                    <Button onClick={handleOpen} sx={{ border: '1px solid ', width:'300px',borderRadius: '10px', background: 'white' }}><HowToRegIcon sx={{mr:3}}/> Cadastrar</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>

                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mt: 2 }}>
                                Cadastro de Pacientes
                            </Typography>
                            <Button onClick={handleClose} sx={{ float: 'right', mt: -5 }}><CloseIcon/></Button>

                            {/* CADASTRO DADOS BASICOS */}
                            <Stack sx={{ float: 'left' }}>
                                <InputLabel htmlFor="component-simple" sx={styledInputLabel} style={{ marginTop: '30px' }}>Nome</InputLabel>
                                <OutlinedInput value={dataForm.name}
                                    onChange={(e) => handleChange(e, "name")} sx={styledInputLeft}></OutlinedInput>

                                <InputLabel htmlFor="component-simple" type="text" sx={styledInputLabel}>Email</InputLabel>
                                <OutlinedInput value={dataForm.email}
                                    onChange={(e) => handleChange(e, "email")}
                                    sx={styledInputLeft}></OutlinedInput>

                                <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Data de Nascimento</InputLabel>
                                <OutlinedInput value={dataForm.date_birth}
                                    onChange={(e) => handleChange(e, "date_birth")}
                                    sx={styledInputLeft} type='date'  ></OutlinedInput>
                            </Stack>
                            {/* ENDEREÇO */}
                            <Stack sx={{ float: 'right' }}>
                                <InputLabel htmlFor="component-simple" sx={styledInputLabelRight} style={{ marginTop: '30px' }}>Endereço</InputLabel>
                                <OutlinedInput value={dataForm.address}
                                    onChange={(e) => handleChange(e, "address")}
                                    sx={styledInputRight} type="text" placeholder="ex:Rua Jorge Mansos" ></OutlinedInput>

                            </Stack>
                            <Stack sx={{ float: 'right', mt: 2.5, mr: 2.5, width: '210px' }}>
                                <Button onClick={handleClick}
                                    type="submit" variant="contained">Cadastrar</Button>
                            </Stack>

                        </Box>
                    </Modal>
                </form>

            </Stack>
        </ContainerInicial >
    );
}

export default ModalCadastro;