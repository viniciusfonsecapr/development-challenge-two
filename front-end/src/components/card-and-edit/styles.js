import styled from "styled-components";


export const ContainerBase = styled.div ` 

`

export const ContainerInicial = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-bottom: 10px;


#card-style {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top:15px;
    width: 330px;
    height: 300px;
    padding-top: 25px;
    padding-left: 10px;
    background-color: #fff;
    box-shadow: 0px 40px 160px rgba(55, 76, 108, 0.24);
    border-radius: 12px;

#user-line{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
}

#card-name{
    text-align: left;
} 

.card-infos {
    padding-top: 10px;
    padding-right:5px;
    font-family: 'roboto';
    font-size: 18px;
    
}

}

@media screen and (min-width: 300px) and (max-width: 400px) {
margin: 0 auto;
align-items: center;

}

@media screen and (min-width: 1270px) and (max-width: 2600px) {
display: flex;
flex-direction: row;
justify-content: space-evenly;
margin-bottom: 10px;

}
`

