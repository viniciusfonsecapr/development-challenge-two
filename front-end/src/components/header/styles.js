import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  font-family: "Roboto Mono", monospace;
  width: 100%;
  height: 60px;
  background: rgba(255, 255, 255, 1.94);

  #button {
    margin-top: -10px;
  }

  @media screen and (min-width: 330px) and (max-width: 400px) {
    width: 400px;

    #home {
      display: none;
    }
    #about {
      display: none;
    }
    #button:hover {
      background-color: #0e20bb;
    }

    #button {
      margin-left: -70px;
      margin-top: -10px;
    }

    img {
      width: 30px;
    }
  }

  @media screen and (min-width: 330px) {
    #home {
      margin-bottom: 10px;
    }
    #about {
      margin-bottom: 10px;
    }

    #home:hover {
      border-bottom: 3px solid #0e20bb;
    }
    #about:hover {
      border-bottom: 3px solid #0e20bb;
    }

    #button:hover {
      background-color: #0e20bb;
    }

    #button {
      margin-bottom: 10px;
    }
  }

  @media screen and (min-width: 1430px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    #home {
      margin-bottom: 10px;
    }
    #about {
      margin-bottom: 10px;
    }

    #home:hover {
      border-bottom: 3px solid #0e20bb;
    }
    #about:hover {
      border-bottom: 3px solid #0e20bb;
    }

    #button:hover {
      background-color: #0e20bb;
    }

    #button {
      margin-bottom: 10px;
    }
  }
`;
