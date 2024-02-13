import axios from "axios";

export function createApiRequest() {
  const token = localStorage.getItem("token");

  const request = axios.create({ //variável para o axios 
    baseURL: "http://paris:3000/auth/login",
  });

  if (!token) return request;

  request.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return request;
}

export const request = createApiRequest(); //pegar tudo que está dentro da função createApiRequest 
