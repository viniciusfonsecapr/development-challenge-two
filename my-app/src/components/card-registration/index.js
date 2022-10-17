import React from "react";

import { ContainerInicial } from './styles'




function CardRegistration({users}) {

    return (
        <>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent:'space-around'}} >
                    {users && users.map((user) => (
                        <div  key={user.id} style={{ width: '350px', padding:'15px' , margin:'20px',backgroundColor: '#fff' }}>
                        <h4 >Nome: {user.name}</h4>
                        <p>Data de Nascimento: {user.date_birth}</p>
                        <p>Email: {user.email}</p>
                        <p>Endereço: {user.address}</p>
                        <button>Editar</button> <button>Lixeira</button>
                    </div>
                    ))}
            </ContainerInicial >

        </>
    );
}

export default CardRegistration;