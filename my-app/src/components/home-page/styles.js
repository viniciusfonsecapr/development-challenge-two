import styled from "styled-components";


export const ContainerInicial = styled.div`
  display:flex;
  flex-direction: column;
  background: linear-gradient(178.65deg, #FFFFFF 23.28%, rgba(0, 99, 248, 0.37) 97.58%);
  width: 100%;
  min-height: 100vh;

  @media screen and (min-width: 300px) and (max-width: 400px) {

    #image-medic {
      position: relative;
      width: 320px;
      height: 180px;
      margin: 10px;
    }


  #second-container {
    margin-top:20px;

  }

  #three-container {
    display: block;

    #text{
      font-size: 18px;
      text-align:center;
    }

    #text-1 {
      text-align: left;
      font-size: 16px;
    }
    #text-2 {
      text-align: left;
      font-size: 13px;
      margin-bottom: 15px;
    }
  }

  #container-card-and-buttons {
    max-width: 380px;

    #text-register-pacient {

    }

    #box-buttonAdd {
      align-items: center;

    }

    #refresh-page{
      display:none;
    }

  }

}

`;

