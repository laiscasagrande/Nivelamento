import axios from "axios";

export function createApiRequest() {
  const token = localStorage.getItem("token");

  const api = axios.create({ //variável para o axios 
    baseURL: "http://paris:3000",
  });

  if (!token) return api;

  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return api;
}

export const api = createApiRequest(); //pegar tudo que está dentro da função createApiRequest 
