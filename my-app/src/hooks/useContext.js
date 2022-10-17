import React, {createContext, useState} from "react";
import { postUser } from "../services/api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const UserContext = createContext();

const UserProvider = ({children}) => {


    const [dataForm, setDataForm] = useState({
        name: "",
        date_birth: "",
        email: "",
        address: "",   
    })

    const [userList, setUserList] = useState([]);

    function handleChange(e, key) {
        setDataForm({...dataForm, [key]: e.target.value});
    }

    function handleClick(e) {
        e.preventDefault();
        postUser(dataForm);
        setUserList([...userList, dataForm]);
        setDataForm({
            name: "",
            date_birth: "",
            email: "",
            address: ""   
        });
        toast.success(`Paciente ${dataForm.name} cadastrado com sucesso.`)
    }

    const context = {
        dataForm: dataForm,
        userList: userList,
        handleChange: handleChange,
        handleClick: handleClick,
    };

    return (
        <UserContext.Provider value={context}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;