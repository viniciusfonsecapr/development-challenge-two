import React from "react";

import { ContainerInicial } from './styles'



function CardRegistration({ data }) {

    return (
        <ContainerInicial >
            <div style={{ width: '350px', backgroundColor: '#fff' }}>
                <h4 >Nome: {data.nome}</h4>
                {/* <p>Sexo: {data.sex}</p> <p>Data de Nascimento: {data.date}</p>
                       <p>Email: {data.email}</p>
                       <button>Ver detalhes</button> <button>Editar</button><button>Lixeira</button> */}
            </div>

        </ContainerInicial >
    );
}

export default CardRegistration;