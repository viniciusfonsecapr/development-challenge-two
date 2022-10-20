import axios from "axios";

export const api = axios.create({
    baseURL: "https://qdin0cvtqe.execute-api.us-east-1.amazonaws.com/"
});

