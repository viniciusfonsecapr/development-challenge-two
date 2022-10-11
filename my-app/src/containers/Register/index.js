import React from "react";

import { Container } from './styles'
import RegisterPage from "../../components/register-page";

function Register(children) {
    return (
      <Container>
          <RegisterPage>{children}</RegisterPage>
      </Container>
    );
  }
  
  export default Register;