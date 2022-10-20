// import React from "react";
// import { useForm } from "react-hook-form";

// import { ContainerBackground } from './styles'
// import Logo from '../../assets/logo.png'
// import Container from '@mui/material/Container'
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import Input from '@mui/material/Input';
// import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';


// function LoginPage() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   return (
//     <ContainerBackground>
//       <Container sx={{
//         width: '350px',
//         height: '500px',
//         borderRadius: '20px',
//         backgroundColor: '#ffff',
//         boxShadow: '0px 4px 4px rgba(0, 0, 0, 1.95)',
//       }}>
//         <Box sx={{ mr: 5, mt: 2, ml: -1 }}><img src={Logo} alt="logo"></img></Box>
//         <Stack
//           component="form"
//           spacing={1}
//           autoComplete="on"
//           sx={{ marginTop: '30px' }}
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <InputLabel htmlFor="component-simple">Email</InputLabel>
//           <Input
//             id="component-simple"
//             {...register("email", { required: true })}
//           />
//           {errors.email && <span style={{color:'red'}}>Campo Obrigatório</span>}
//           <InputLabel htmlFor="component-simple">Senha</InputLabel>
//           <Input
//             id="component-simple"
//             size="small"
//             {...register("password", { required: true })}
//           />
//           {errors.password && <span style={{color:'red'}}>Campo Obrigatório</span>}
//           <Link href="/register">Não tem conta? Cadastre-se</Link>
//           <Box
//             sx={{ pt: 3}}>
//               <Button sx={{width: 150, float: 'right'}} type="submit" variant="contained">Login</Button>
//           </Box>
//         </Stack>
//       </Container>



//     </ContainerBackground>
//   );
// }

// export default LoginPage;