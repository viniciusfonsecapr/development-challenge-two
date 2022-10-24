import styled from "styled-components";

export const Container = styled.div`
position:fixed;
font-family: 'Roboto Mono', monospace;
width: 100%;
height: 60px;
background: linear-gradient(90.09deg, rgba(255, 255, 255, 0.94) 10.93%, rgba(255, 255, 255, 0.946452) 41.9%, rgba(255, 255, 255, 0.429492) 68.72%, rgba(255, 255, 255, 0.94) 99.7%);
border-bottom: 1px solid rgba(0, 0, 0, 0.1);

@media screen and (min-width: 330px) and (max-width: 400px) {
	width: 250px;
   
    #home  {
        display:none;
    }
    #about  {
        display:none;
    }
    #button:hover {
        background-color:#0E20BB ;
    }

    img {
        width:30px;
    }
}

@media screen and (min-width: 330px) {
    #home  {
        margin-bottom:10px;
    }
    #about  {
        margin-bottom:10px;
    }

    #home:hover  {
        border-bottom:3px solid #0E20BB;
    }
    #about:hover  {
        border-bottom:3px solid #0E20BB;
    }

    #button:hover {
        background-color:#0E20BB ;
    }

    #button {
        margin-bottom:10px;
    }



}
`