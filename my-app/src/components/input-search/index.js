import React from "react";

import { ContainerInicial } from './styles'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function InputSearch() {

    return (
        <>
            <ContainerInicial>
                <Box component="form" noValidate autoComplete="off" >
                    <FormControl sx={{ width: '350px', mt: 5,ml:10,display:'flex', flexDirection:'row' }}>
                        <OutlinedInput sx={{height:'40px', borderRadius:'10px', mr:1,}} placeholder="ex: João Silva" />
                        <Button sx={{border:'1px solid',  borderRadius:'10px'}}>Search</Button>
                    </FormControl>
                </Box>
            </ContainerInicial>

        </>
    );
}

export default InputSearch;