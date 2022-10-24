import React, { useEffect, useState, useRef } from "react";
import { api } from '../../services/api'
import { toast } from 'react-toastify'
// import * as Yup from "yup";

import { ContainerBase, ContainerInicial } from './styles'
import './styles-modal.css'
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
    width: 400,
    height: 500,
    bgcolor: 'background.paper',
    boxShadow: '0px 12px 32px rgba(43, 68, 106, 0.12)',
    p: 4,

};


const styledInputLabelRight = {
    marginTop: '6px',
    marginLeft: '20px',
    marginBottom: '2px',

}

const styledInputLeft = {
    marginTop: '5px',
    marginRight: '20px',
    marginLeft: '20px',
    marginBottom: '5px',
    height: '30px',

}

const styledInputRight = {
    marginRight: '20px',
    marginTop: '5px',
    marginLeft: '20px',
    marginBottom: '5px',
    height: '30px',
}

const styledInputLabel = {
    marginTop: '6px',
    marginLeft: '20px',
    marginBottom: '2px',
}


function CardRegistration() {

    const [users, setUsers] = useState([])

    const [userEdit, setUserEdit] = useState([])

    const inputName = useRef()
    const inputEmail = useRef()
    const inputAddress = useRef()
    const inputDateBirth = useRef()

    const [open, setOpen] = React.useState(false);
    const handleOpen = (user) => {
        setOpen(true);
        setUserEdit(user)
    }
    const handleClose = () => setOpen(false);


    // const validEmailMsg = 'Campo obrigatório';
    // const requiredField = 'Campo obrigatório';

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email(validEmailMsg)
    //         .required(validEmailMsg),
    //     name: Yup.string()
    //         .required(requiredField),
    //     date_birth: Yup.date()
    //         .required(requiredField),
    //     address: Yup.string()
    //         .required(requiredField),
    // });


    useEffect(() => {
        api.get('users')
            .then((response) => {
                setUsers(response.data.Items)

            });
    }, []);

    async function updateGetPacients() {
        await api.get('users')
            .then((response) => {
                setUsers(response.data.Items)

            })
    }

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



    const putToSucess = async (e) => {
        e.preventDefault()

        const body = {
            id: userEdit.id,
            name: inputName.current.value,
            email: inputEmail.current.value,
            address: inputAddress.current.value,
            date_birth: inputDateBirth.current.value,
        }
        console.log(body)
        try {
            console.log(body)
            await api.put(`users`, body)
            toast.success(`Paciente ${body.name} Editado`)
            handleClose()
            updateGetPacients()

        } catch (error) {
            toast.error(`Servidor Offiline`)
        }

    }


    function clickHandler(e) {
        setUserEdit((prevValues) => ({
            ...prevValues,
            [e.target.id]: e.target.value,
        }))
    }



    return (
        <ContainerBase>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >

                {users.length <= 0 ? <span style={{ margin: '5%' }}>SEM CADASTRO DE PACIENTES</span>
                    : (
                        users.map((user, index) => (
                            <div key={user.id} id="card-style" style={{ width: '330px', height: '250px', padding: '25px', marginTop: '4%', backgroundColor: '#fff', boxShadow: '0px 40px 160px rgba(55, 76, 108, 0.24)', borderRadius: '12px' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }} >{user.name}</Typography>
                                <Typography style={paddingItems}>Data de Nascimento: {user.date_birth}</Typography>
                                <Typography style={paddingItems}>Email: {user.email}</Typography>
                                <Typography style={paddingItems}>Endereço: {user.address}</Typography>
                                <Box sx={{ display: 'flex', flexDirectionmn: 'row', justifyContent: 'space-evenly', mt: 1 }}>
                                    <Button onClick={() => handleOpen(user)} sx={{ mr: 1 }}> <EditIcon /></Button>
                                    <Button>
                                        <DeleteIcon onClick={() => deletePacients(user.id)} />
                                    </Button>
                                </Box>
                            </div>
                        )
                        )

                    )}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <form onSubmit={putToSucess}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', mt: 1 }}>
                                Editar Paciente
                            </Typography>
                            <Button onClick={handleClose} sx={{ float: 'right', mt: -5 }}><CloseIcon /></Button>

                            <Stack>
                                <InputLabel htmlFor="component-simple" sx={styledInputLabel} style={{ marginTop: '30px' }}>Nome *</InputLabel>
                                <OutlinedInput name="name" inputRef={inputName} onChange={clickHandler}
                                    defaultValue={userEdit.name} type="text"
                                    sx={styledInputLeft}></OutlinedInput>
                                <InputLabel htmlFor="component-simple" type="email" sx={styledInputLabel}>Email *</InputLabel>
                                <OutlinedInput type="email" name="email" onChange={clickHandler}
                                    inputRef={inputEmail}
                                    defaultValue={userEdit.email} sx={styledInputLeft}></OutlinedInput>

                            </Stack>
                            <Stack>
                                <InputLabel htmlFor="component-simple" sx={styledInputLabelRight} style={{ marginTop: '30px' }}>Endereço *</InputLabel>
                                <OutlinedInput name="address" onChange={clickHandler}
                                    defaultValue={userEdit.address}
                                    inputRef={inputAddress}
                                    sx={styledInputRight} placeholder="ex: Rua Jorge Mansos" >
                                </OutlinedInput>
                                <InputLabel htmlFor="component-simple" sx={styledInputLabel}>Data de Nascimento *</InputLabel>
                                <OutlinedInput name="date_birth" onChange={clickHandler}
                                    inputRef={inputDateBirth}
                                    defaultValue={userEdit.date_birth} sx={styledInputRight} type='date' ></OutlinedInput>
                            </Stack>

                            <Stack sx={{ ml: 6, pt: 3, width: '250px', height: '50px' }}>
                                <Button
                                    type="submit" variant="contained">Editar
                                </Button >
                            </Stack>
                        </form>

                    </Box>
                </Modal>
            </ContainerInicial >

        </ContainerBase>
    );
}

export default CardRegistration;



