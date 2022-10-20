import React, { useEffect, useState } from "react";
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { Formik } from "formik";
import * as Yup from "yup";

import { ContainerInicial } from './styles'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack'
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import CloseIcon from '@mui/icons-material/Close';

const paddingItems = {
    paddingTop: '5px',
    paddingBottom: '1px',
    fontFamily: 'roboto'
}

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 350,
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


function CardRegistration() {

    const [users, setUsers] = useState([])

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    const validEmailMsg = 'Campo obrigatório';
    const requiredField = 'Campo obrigatório';

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(validEmailMsg)
            .required(validEmailMsg),
        name: Yup.string()
            .required(requiredField),
        date_birth: Yup.date()
            .required(requiredField),
        address: Yup.string()
            .required(requiredField),
    });


    useEffect(() => {
        api.get('users')
            .then((response) => {
                setUsers(response.data.Items)

            });
    }, []);


    async function deletePacients(id) {
        try {
            await api.delete(`users/`, {
                data: {
                    id
                }
            })
            const newUsers = users.filter(users => users.id !== id)
            setUsers(newUsers)
            toast.success("Paciente deletado com sucesso")
        } catch (error) {
            toast.error("Consulte o suporte")
            console.log(error)
        }
    }

    const putToSucess = async (body) => {
        try {
            const resp  = await api.put('users', body).then(() => setTimeout(refreshPage, 3000))
            const { data } = resp;
            toast.success(`Paciente ${body.name} cadastrado`) 
            
        } catch (error) {
            toast.error(`Servidor Offiline`)
        }
    }
    
    function refreshPage() {
        window.location.reload();
    }



    return (
        <>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                {users.map((user) => (
                    <div key={user.id} style={{ width: '330px', height: '250px', padding: '25px', marginTop: '4%', marginLeft: '3%', backgroundColor: '#fff', boxShadow: '0px 40px 160px rgba(55, 76, 108, 0.24)', borderRadius: '12px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }} >{user.name}</Typography>
                        <Typography style={paddingItems}>Data de Nascimento: {user.date_birth}</Typography>
                        <Typography style={paddingItems}>Email: {user.email}</Typography>
                        <Typography style={paddingItems}>Endereço: {user.address}</Typography>
                        <Box sx={{ display: 'flex', flexDirectionmn: 'row', justifyContent: 'space-evenly', mt: 1 }}>

                            <Formik initialValues={user}
                                onSubmit={putToSucess} validationSchema={validationSchema}>
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
                                            <Button onClick={handleOpen} sx={{ mr: 1 }}> <EditIcon /></Button>

                                            <Modal
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>

                                                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mt: 1 }}>
                                                        Editar Paciente
                                                    </Typography>
                                                    <Button onClick={handleClose} sx={{ float: 'right', mt: -5 }}><CloseIcon /></Button>

                                                    <Stack sx={{ float: 'left' }}>
                                                        <InputLabel htmlFor="component-simple" error={!!errors.name} sx={styledInputLabel} style={{ marginTop: '30px' }}>Nome *</InputLabel>
                                                        <OutlinedInput name="name" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={!!errors.name}
                                                            value={values.name} type="text"
                                                            sx={styledInputLeft}></OutlinedInput>
                                                        <InputLabel htmlFor="component-simple" error={!!errors.email} type="email" sx={styledInputLabel}>Email *</InputLabel>
                                                        <OutlinedInput type="email" name="email" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={!!errors.email}
                                                            value={values.email} sx={styledInputLeft}></OutlinedInput>
                                                        <InputLabel htmlFor="component-simple" error={!!errors.date_birth} sx={styledInputLabel}>Data de Nascimento *</InputLabel>
                                                        <OutlinedInput name="date_birth" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            error={!!errors.date_birth}
                                                            value={values.date_birth} sx={styledInputLeft} type='date' ></OutlinedInput>
                                                    </Stack>
                                                    <Stack sx={{ float: 'right' }}>
                                                        <InputLabel htmlFor="component-simple" error={!!errors.address} sx={styledInputLabelRight} style={{ marginTop: '30px' }}>Endereço *</InputLabel>
                                                        <OutlinedInput name="address" onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.address}
                                                            error={!!errors.address}
                                                            sx={styledInputRight} placeholder="ex: Rua Jorge Mansos" >
                                                        </OutlinedInput>
                                                    </Stack>

                                                    <Stack sx={{ float: 'right', mt: 2, mr: 0.6, width: '210px' }}>
                                                        <Button
                                                            type="submit" onClick={handleSubmit} variant="contained">Editar
                                                        </Button>
                                                    </Stack>
                                                </Box>
                                            </Modal>
                                        </form>
                                    </>
                                )}
                            </Formik>

                            <Button>
                                <DeleteIcon onClick={() => deletePacients(user.id)} />
                            </Button>
                        </Box>
                    </div>
                )
                )}
            </ContainerInicial >

        </>
    );
}

export default CardRegistration;