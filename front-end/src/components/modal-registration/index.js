import React from "react";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../services/api'
import { Formik } from "formik";
import * as Yup from "yup";

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
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: '0px 12px 32px rgba(43, 68, 106, 0.12)',
    p: 4,
};

const styledInputLabelRight = {
    marginTop: '6px',
    marginLeft: '10px',
    marginBottom: '2px',

}

const styledInputLeft = {
    marginTop: '5px',
    marginLeft: '15px',
    marginBottom: '5px',
    height: '30px',

}

const styledInputRight = {
    marginRight: '5px',
    marginTop: '5px',
    marginLeft: '10px',
    marginBottom: '5px',
    height: '30px',
}

const styledInputLabel = {
    marginTop: '6px',
    marginLeft: '15px',
    marginBottom: '2px',
}


function ModalRegisterPacient() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const initialSucessState = {
        email: '',
        name: '',
        date_birth: '',
        address: '',
    };

    const validEmailMsg = 'Campo obrigatório';
    const requiredField = 'Campo obrigatório';

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(validEmailMsg)
            .required(validEmailMsg),
        name: Yup.string()
            .required(requiredField).min(4, 'Obrigatório').max(30, 'Maximo de 50 caracteres'),
        date_birth: Yup.date()
            .required(requiredField),
        address: Yup.string()
            .required(requiredField).min(10, 'Obrigatório').max(50, 'Maximo de 50 caracteres'),
    });

    const navigateToSucess = async (body) => {

        try {
            const resp = await api.post('users', body).then(() => setTimeout(refreshPage, 3000))
            console.log(resp)
            toast.success(`Paciente ${body.name} cadastrado`)
            handleClose()

        } catch (error) {
            toast.error(`Servidor Offiline`)
        }

    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <ContainerInicial>
            <Stack sx={{ display: 'flex', mt: 5  }}>
                <Formik initialValues={initialSucessState} onSubmit={navigateToSucess} validationSchema={validationSchema}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                    }) => (
                        <>
                            <form>
                                <Button onClick={handleOpen} sx={{ border: '1px solid ', width: '280px', borderRadius: '10px', background: 'white' }}><HowToRegIcon sx={{ mr: 5 }} /> Cadastrar</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>

                                        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mt: 1 }}>
                                            Cadastro de Pacientes
                                        </Typography>
                                        <Button onClick={handleClose} sx={{ float: 'right', mt: -5 }}><CloseIcon /></Button>

                                        <Stack >
                                            <InputLabel htmlFor="component-simple" error={!!errors.name} sx={styledInputLabel} style={{ marginTop: '30px' }}>Nome *</InputLabel>
                                            <OutlinedInput
                                                name="name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={!!errors.name}
                                                value={values.name}
                                                type="text"
                                                sx={styledInputLeft}></OutlinedInput>
                                            <InputLabel htmlFor="component-simple" error={!!errors.email} type="email" sx={styledInputLabel}>Email *</InputLabel>
                                            <OutlinedInput
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={!!errors.email}
                                                value={values.email}
                                                sx={styledInputLeft}></OutlinedInput>
                                        </Stack>
                                        <Stack >
                                            <InputLabel htmlFor="component-simple" error={!!errors.address} sx={styledInputLabelRight} style={{ marginTop: '30px' }}>Endereço *</InputLabel>
                                            <OutlinedInput
                                                name="address"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.address}
                                                error={!!errors.address}
                                                sx={styledInputRight}
                                                placeholder="ex: Rua Jorge Mansos" >
                                            </OutlinedInput>
                                            <InputLabel htmlFor="component-simple" error={!!errors.date_birth} sx={styledInputLabel}>Data de Nascimento *</InputLabel>
                                            <OutlinedInput
                                                name="date_birth"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                error={!!errors.date_birth}

                                                value={values.date_birth}
                                                sx={styledInputRight}
                                                type='date' ></OutlinedInput>
                                        </Stack>

                                        <Stack sx={{ ml: 6, pt: 3, width: '250px', height: '50px' }}>
                                            <Button
                                                type="submit" onClick={handleSubmit} variant="contained">Cadastrar
                                            </Button>
                                        </Stack>
                                    </Box>
                                </Modal>
                            </form>
                        </>
                    )}
                </Formik>
            </Stack>
        </ContainerInicial >
    );
}

export default ModalRegisterPacient;



