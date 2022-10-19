import React, { useEffect, useState } from "react";
import { api } from '../../services/api'
import { toast } from 'react-toastify'

import { ContainerInicial } from './styles'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const paddingItems = {
    paddingTop: '5px',
    paddingBottom: '1px',
    fontFamily: 'roboto'
}


function CardRegistration() {

    const [users, setUsers] = useState([])


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
                            <Button sx={{ mr: 1 }}>
                                <EditIcon />
                            </Button>
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