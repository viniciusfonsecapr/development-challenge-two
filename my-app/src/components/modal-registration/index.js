import React from "react";
import { useForm } from "react-hook-form";

import { ContainerInicial } from './styles'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 400,
    bgcolor: 'background.paper',
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
    mr: '6px',
}


function ModalCadastro() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <ContainerInicial>
            <Stack
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{display:'flex', mt: 5, ml:'15%', width: '250px' }}

            >
                <Button onClick={handleOpen} sx={{ border: '1px solid ', borderRadius: '10px', background: 'white' }}>Cadastrar pacientes</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>

                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', mt: 2 }}>
                            Cadastro de Pacientes
                        </Typography>
                        <Button onClick={handleClose} sx={{ float: 'right', mt: -5 }}>X</Button>

                        {/* CADASTRO DADOS BASICOS */}
                        <Stack sx={{ float: 'left' }}>
                            <InputLabel htmlFor="component-simple" sx={styledInputLabel} style={{ marginTop: '30px' }}>Nome</InputLabel>
                            <OutlinedInput sx={styledInputLeft}></OutlinedInput>

                            <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Sexo</InputLabel>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"

                                >
                                    <FormControlLabel control={<Radio />} label="F" value="feminimo" sx={{ width: '50px', ml: '5px' }} />
                                    <FormControlLabel control={<Radio />} label="M" value="masculino" sx={{ width: '50px', ml: '1px' }} />
                                    <FormControlLabel control={<Radio />} label="Outros" value="outros" sx={{ width: '50px', ml: '1px' }} />
                                </RadioGroup>
                            </FormControl>

                            <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Email</InputLabel>
                            <OutlinedInput sx={styledInputLeft}></OutlinedInput>

                            <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Data de Nascimento</InputLabel>
                            <OutlinedInput sx={styledInputLeft}></OutlinedInput>
                        </Stack>
                        {/* ENDEREÇO */}
                        <Stack sx={{ float: 'right' }}>
                            <InputLabel htmlFor="component-simple" sx={styledInputLabelRight} style={{ marginTop: '30px' }}>Endereço</InputLabel>
                            <OutlinedInput sx={styledInputRight} placeholder="CEP" ></OutlinedInput>
                            <OutlinedInput sx={styledInputRight} placeholder="CIDADE"></OutlinedInput>
                            <OutlinedInput sx={styledInputRight} placeholder="RUA"></OutlinedInput>
                            <OutlinedInput sx={styledInputRight} placeholder="NÚMERO"></OutlinedInput>
                            <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                                <OutlinedInput sx={styledInputRightState} placeholder="BAIRRO"></OutlinedInput>
                                <OutlinedInput sx={styledInputRightState} placeholder="ESTADO"></OutlinedInput>
                            </Stack>


                        </Stack>

                        <Stack sx={{ float: 'right', mt: 2.5, mr: 2.5, width: '210px' }}>
                            <Button variant="contained">CADASTRAR</Button>
                        </Stack>

                    </Box>
                </Modal>
            </Stack>
        </ContainerInicial >
    );
}

export default ModalCadastro;