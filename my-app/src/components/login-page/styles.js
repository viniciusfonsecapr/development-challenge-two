import styled from "styled-components";
import Background from '../../assets/medico2.jpg'

export const ContainerBackground = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;

  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
