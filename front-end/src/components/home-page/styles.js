import styled from "styled-components";

export const ContainerInicial = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(
    178.65deg,
    #ffffff 23.28%,
    rgba(0, 99, 248, 0.37) 97.58%
  );
  width: 1000px;
  height: 100%;

  #three-container {
    display: flex;
    justify-content: left;
    flex-direction: column;
  }

  #container-card-and-buttons {
    width: 100%;
    min-height: 100vh;
    border-radius: 15px;
    border: 0.2px solid rgba(0, 0, 0, 0.15);
    background: linear-gradient(
      127.73deg,
      rgba(244, 245, 255, 0.8) 0%,
      rgba(247, 247, 255, 0.75) 0.01%,
      rgba(255, 255, 255, 0.464) 29.92%,
      rgba(244, 244, 244, 0.736) 59.68%,
      rgba(225, 226, 238, 0.56) 78.69%,
      rgba(234, 235, 247, 0) 98.85%
    );

    #text-register-pacient {
      text-align: center;
      font-size: 25px;
      font-weight: bold;
    }

    #box-buttonAdd {
      display: flex;
      flex-direction: row;
      align-items: left;
    }
  }

  ///// MEDIA QUERIES

  @media screen and (max-width:320px) {
    background: linear-gradient(
    178.65deg,
    #ffffff 13.28%,
    rgba(0, 99, 248, 0.37) 97.58%
  );
  width: 310px;


    #image-medic {
      position: relative;
      width: 90%;
      height: 180px;
      margin: 10px;
    }

    #second-container {
      margin-top: 20px;
      display: block;

      #text {
        font-size: 18px;
        text-align: center;
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
      width: 90%;

      #text-register-pacient {
      }

      #box-buttonAdd {
        align-items: center;
      }

      #refresh-page {
        display: none;
      }
    }
  }

  @media screen and (min-width:310px) and (max-width: 420px) {
    background: linear-gradient(
    178.65deg,
    #ffffff 13.28%,
    rgba(0, 99, 248, 0.37) 97.58%
  );
  width: 100%;

    #image-medic {
      position: relative;
      width: 90%;
      height: 180px;
      margin: 10px;
    }

    #second-container {
      margin-top: 20px;
      display: block;

      #text {
        font-size: 18px;
        text-align: center;
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
      width: 90%;

      #text-register-pacient {
      }

      #box-buttonAdd {
        align-items: center;
        width: 90%;
      }
    }
  }

  @media screen and (min-width: 760px) {
    background: linear-gradient(
    178.65deg,
    #ffffff 13.28%,
    rgba(0, 99, 248, 0.37) 97.58%
  );
    width: 100%;
 
    #image-medic {
      position: relative;
      width: 88%;
      height: 180px;
      margin-top: 10px;
      margin-left: 15px;
    }

    #second-container {
      margin-top: 20px;
      display: block;

      #text {
        font-size: 18px;
        text-align: center;
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
      width: 90%;

      #text-register-pacient {
      }

      #box-buttonAdd {
        align-items: center;
      }

      #refresh-page {
        display: none;
      }
    }
  }

  @media screen and (min-width: 780px) and (max-width: 980px) {
    #second-container {
      display: block;

      #text {
        text-align: center;
      }

      #text-1 {
        font-size: 24px;
        text-align: center;
      }
      #text-2 {
        font-size: 19px;
        text-align: center;
      }
    }

    #image-medic {
      position: relative;
      width: 700px;
      height: 400px;
      margin: 10px;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 781px) and (max-width: 1280px) {
    #second-container {
      display: block;

      #text {
        text-align: center;
      }

      #text-1 {
        font-size: 24px;
        text-align: center;
      }
      #text-2 {
        font-size: 19px;
        text-align: center;
      }
    }

    #image-medic {
      position: relative;
      width: 1100px;
      height: 500px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 1281px) and (max-width: 2580px) {
    #second-container {
      display: block;

      #text {
        font-size: 35px;
        text-align: center;
      }

      #text-1 {
        font-size: 30px;
        text-align: center;
      }
      #text-2 {
        font-size: 24px;
        text-align: center;
      }
    }

    #image-medic {
      position: relative;
      width: 1100px;
      height: 600px;
      margin: 0 auto;
      margin-top: 20px;
    }
  }
`;
