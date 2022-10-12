import React from "react";

import { Container } from './styles'

import Logo from '../../assets/logo.png'
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

function Header() {

    return (
        <Container>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <img src={Logo} alt="logo" style={{ width: '140px', marginLeft: '40px' }}></img>
                <Box sx={{ width: '500px', marginTop: '20px', marginLeft:'20%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignContent:'center', }}>
                    <Link href="#" underline="none" sx={{ color: 'black' }}>
                        HOME
                    </Link>
                    <Link href="#" underline="none" sx={{ color: 'black' }}>
                        About
                    </Link>
                    <Button sx={{
                        marginTop: '-10px',
                        width: '130px',
                        height: '40px',
                        background: '#0E20FF',
                        color:'white',
                        border: '1px solid rgba(0, 0, 0, 0.15)',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        borderRadius: '20px'}}>Github <GitHubIcon sx={{marginLeft:'5px'}}/>
                    </Button>
            </Box>

        </Box>
        </Container >
    );
}

export default Header;