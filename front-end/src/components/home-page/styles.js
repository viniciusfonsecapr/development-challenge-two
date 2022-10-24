import styled from "styled-components";

export const ContainerInicial = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    178.65deg,
    #ffffff 23.28%,
    rgba(0, 99, 248, 0.37) 97.58%
  );
  width: 100%;
  min-height: 100vh;

  #three-container{
        display:flex;
        justify-content:left;
        flex-direction: column;
      }

  @media screen and (min-width: 300px) and (max-width: 550px) {
    #image-medic {
      position: relative;
      width: 320px;
      height: 180px;
      margin-top: 10px;
      margin-left:10px
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
      max-width: 380px;

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

  @media screen and (min-width: 401px) and (max-width: 780px) {
 

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
      height:400px;
      margin:10px;
      margin-top:20px;
      
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
   height:500px;
   margin:0 auto;
   margin-top: 20px;
  
   
 }
 
}

@media screen and (min-width: 1281px) and (max-width: 2580px) {
 

 #second-container {
   display: block;

   #text {
    font-size:35px;
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
   height:600px;
   margin:0 auto;
   margin-top: 20px;
  
   
 }
 
}
`;
