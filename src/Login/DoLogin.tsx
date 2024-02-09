import { Logar, Initial, Menu } from "./LoginCss";
import Inicio from "../assets/Montanha.jfif";
import { NavLink } from "react-router-dom";

export function DoLogin() {
  return (
    <>
      <Initial>
        <Logar>
          <img src={Inicio} alt="" />
        </Logar>

        <Menu>
          <h1>Entrar</h1>
          <input type="text" placeholder="Digite seu usuário"></input>
          <input type="password" placeholder="Digite sua senha"></input>
          <NavLink to="/carousel" title="">
          <button>Acessar a plataforma</button>
          </NavLink>
        </Menu>
      </Initial>
    </>
  );
}
