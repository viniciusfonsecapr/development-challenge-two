
import axios from "axios";

const api = axios.create({
    baseURL: "https://qdin0cvtqe.execute-api.us-east-1.amazonaws.com/"
});

export const getUser = async () => {
    const response = await api.get("/users");
    const{users} = response.data
    return users;
}

export const postUser = async (body) => {
    const response = await api.post("/users", body);
    const{users} = response.data
    return users;
}

export const deleteUser = async (id) => {
    const response = await api.delete(`/users/${id}`)
    return response;
}

export const updateUser = async (id, body) => {
    const response = await api.put(`/users/${id}`, body);
    return response;
}