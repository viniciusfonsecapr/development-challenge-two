import React from "react";
import { useForm } from "react-hook-form";

import { ContainerInicial } from './styles'

import Logo from '../../assets/logo.png'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <ContainerInicial>
            <Box><img src={Logo} alt="logo"></img></Box>
            <Container sx={{
                display:'flex',
                flexDirection:'row',
                alignContent:'center',
                width: '550px',
                height: '350px',
                borderRadius: '10px',
                backgroundColor: '#ffff',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 1.95)',
            }}>
                <Stack
                    component="form"
                    spacing={1}
                    autoComplete="on"
                    sx={{ marginTop: '10px', paddingTop:'20px',  width: '550px',
                    height: '350px', }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <InputLabel htmlFor="component-simple">Nome</InputLabel>
                    <Input
                        id="component-simple"
                        {...register("nome", { required: true })}
                    />
                    {errors.email && <span style={{ color: 'red' }}>Campo Obrigatório</span>}
                    <InputLabel htmlFor="component-simple">Email</InputLabel>
                    <Input
                        id="component-simple"
                        {...register("email", { required: true })}
                    />
                    {errors.email && <span style={{ color: 'red' }}>Campo Obrigatório</span>}
                    <InputLabel htmlFor="component-simple">Senha</InputLabel>
                    <Input
                        id="component-simple"
                        size="small"
                        {...register("password", { required: true })}
                    />
                    {errors.password && <span style={{ color: 'red' }}>Campo Obrigatório</span>}
                    <Link href="/login">Já tem conta?</Link>
                    <Box
                        sx={{ pt: 3 }}>
                        <Button sx={{ width: 150, float: 'right' }} type="submit" variant="contained">Cadastrar</Button>
                    </Box>
                </Stack>
            </Container>

        </ContainerInicial>
    );
}

export default RegisterPage;