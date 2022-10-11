import React from "react";

import { Container } from './styles'

import Logo from '../../assets/logo.png'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'

function Header() {

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <img src={Logo} alt="logo" style={{ width: '140px', marginLeft: '50px' }}></img>
                <Box sx={{width:'400px',margin:'20px 0px 0px 400px',display: 'flex', flexDirection: 'row',justifyContent:'space-around'}}>
                    <Link href="#" underline="none" sx={{color:'white'}}>
                        HOME
                    </Link>
                    <Link href="#" underline="none" sx={{color:'white'}}>
                        Cadastrar Pacientes
                    </Link>
                    <Link href="#" underline="none" sx={{color:'white'}}>
                        About
                    </Link>
                </Box>

            </Box>
        </Container>
    );
}

export default Header;