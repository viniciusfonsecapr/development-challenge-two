import axios from "axios";

export const api = axios.create({
    baseURL: "https://qdin0cvtqe.execute-api.us-east-1.amazonaws.com/"
});

export const deleteUser = async (id) => {
    const response = await api.delete(`users/${id}`)
    return response;
}

export const updateUser = async (id, body) => {
    const response = await api.put(`/users/${id}`, body);
    return response;
}