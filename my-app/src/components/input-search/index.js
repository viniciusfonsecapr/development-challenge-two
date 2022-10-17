import React from "react";

import { ContainerInicial } from './styles'
import ReplayIcon from '@mui/icons-material/Replay';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function refreshPage() {
    window.location.reload();
}

function InputSearch() {

    return (
        <>
            <ContainerInicial>
                <Box component="form" noValidate autoComplete="off" >
                    <FormControl sx={{ width: '350px', mt: 5, ml:20, display: 'flex', flexDirection: 'row' }}>
                        <OutlinedInput sx={{ height: '40px', width:'300px', borderRadius: '10px', mr: 2, }} placeholder="ex: João Silva" />
                        <Button sx={{ border: '1px solid', borderRadius: '10px' }}>Search</Button>
                        <Button type="button" onClick={refreshPage}> <ReplayIcon/> </Button>
                    </FormControl>
                </Box>
            </ContainerInicial>

        </>
    );
}

export default InputSearch;