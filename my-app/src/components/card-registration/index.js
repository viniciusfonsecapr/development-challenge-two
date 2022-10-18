import React from "react";

import { ContainerInicial } from './styles'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const paddingItems = {
    paddingTop: '5px',
    paddingBottom:'2px',
    fontFamily:'roboto'
}

function CardRegistration({ users }) {

    return (
        <>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >


                 {users &&  users.map((user) => (
                    <div key={user.id} style={{ width: '330px', padding: '25px', marginTop: '4%', marginLeft: '3%', backgroundColor: '#fff',boxShadow: '0px 40px 160px rgba(55, 76, 108, 0.24)' ,borderRadius: '12px' }}>
                        <Typography variant="h5" sx={{fontWeight:'bold'}} >{user.name}</Typography>
                        <Typography style={paddingItems}>Data de Nascimento: {user.date_birth}</Typography>
                        <Typography style={paddingItems}>Email: {user.email}</Typography>
                        <Typography style={paddingItems}>Endereço: {user.address}</Typography>
                        <Box sx={{float:'right',mt:10}}>
                           <Button sx={{mr:1}}>
                               <EditIcon/>
                            </Button>
                            <Button>
                                <DeleteIcon/>
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