import React from "react";

import { ContainerInicial } from './styles'



function CardRegistration({users}) {

    return (
        <ContainerInicial>
            <div style={{width:'350px', backgroundColor:'#fff'}}>
                <h4>Nome:{users.name}</h4>
                <p>Sexo: {users.sex}</p> <p>Data de Nascimento: {users.date}</p>
                <p>Email: {users.email}</p>
                <button>Ver detalhes</button> <button>Editar</button><button>Lixeira</button>
            </div>
        </ContainerInicial >
    );
}

export default CardRegistration;