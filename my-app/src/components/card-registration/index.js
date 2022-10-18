import React from "react";

import { ContainerInicial } from './styles'


const paddingItems = {
    paddingTop: '5px',
    paddingBottom:'2px',
    fontFamily:'roboto'
}

function CardRegistration({ users }) {

    return (
        <>
            <ContainerInicial style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
                {users && users.map((user) => (
                    <div key={user.id} style={{ width: '330px', padding: '25px', marginTop: '4%', marginLeft: '3%', backgroundColor: '#fff',boxShadow: '0px 40px 160px rgba(55, 76, 108, 0.24)' ,borderRadius: '12px' }}>
                        <h3 >{user.name}</h3>
                        <p style={paddingItems}>Data de Nascimento: {user.date_birth}</p>
                        <p style={paddingItems}>Email: {user.email}</p>
                        <p style={paddingItems}>Endereço: {user.address}</p>
                        <button>Editar</button> <button>Lixeira</button>
                    </div>
                ))}
            </ContainerInicial >

        </>
    );
}

export default CardRegistration;