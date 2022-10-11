import React from "react";

import { Container } from './styles'
import HomePage from "../../components/home-page";

function Home(children) {
    return (
      <Container>
          <HomePage>{children}</HomePage>
      </Container>
    );
  }
  
  export default Home;