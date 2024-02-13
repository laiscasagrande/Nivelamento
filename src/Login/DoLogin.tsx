import { useForm } from "react-hook-form";
import Inicio from "../assets/Montanha.jfif";
import { api } from "../services/axios";
import { Initial, Logar, Menu } from "./LoginCss";
//import { NavLink } from "react-router-dom";

//import { NavLink } from "react-router-dom";
//import { useState } from "react";

type Login = {
  login: string;
  password: string;
};

type ReturnLogin = {
  //tipagem para retornar os valores do backend
  returnUser: {
    login: string;
    nmUser: string;
  };
  token: string; //para guardar no storage
};

export function DoLogin() {
  const { handleSubmit, register } = useForm<Login>(); //o handle e o register fazem parte do formulario e o regiser é o responsável por registrar o login e a senha
 

  const getLogin = async (event: Login) => {
    //o event foi determinado pelo back e o login e a senha sao passadas atraves desse event
    const { login, password } = event;

    try {
      const { data } = await api.post<ReturnLogin>("/auth/login", {
        //retornar login e password
        login,
        password,
      });
      localStorage.setItem("token", data.token); //guardar o token no localStorage para que possa ser armazenado
      window.location.href = "/carousel"; 
    } catch (erro) {
      alert("Você preencheu algum campo de forma equivocada. Tente novamente.")
    }
  };

  return (
    <>
      <Initial>
        <Logar>
          <img src={Inicio} alt="" />
        </Logar>

        <Menu onSubmit={handleSubmit(getLogin)}>
          {" "}
          {/* a funçõa handleSubmit vai ser chamada quando o usuário clicar no botão e vai ser responsável por enviar os dados para o getLogin*/}
          <h1>Entrar</h1>
          <input
            type="text"
            placeholder="Digite seu usuário"
            {...register("login")}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <button type="submit">Acessar a plataforma</button>
          {/*success && <NavLink to="/carousel">Acessar a plataforma</NavLink>*/}
        </Menu>
      </Initial>
    </>
  );
}
