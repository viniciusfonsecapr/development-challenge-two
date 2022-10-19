import React from "react";
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

const secondDiv = {
    marginLeft:'-24px',
    height:'193px',
    width:'330px',
    backgroundColor:'blue',
    borderRadius:'12px'

}

function CardRegistration({ users }) {

    const deleteUser = async (body) => {
        const resp  = await api.delete(`users/${body.id}`, body).then(() => refreshPage())
        const { data } = resp;
        toast.success(`Paciente ${body.name} deletado`)
        
    }

    function refreshPage() {
        window.location.reload();
    }

    return (
        <>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >


                {users && users.map((user) => (
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
                                    <DeleteIcon onClick={deleteUser}/>
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