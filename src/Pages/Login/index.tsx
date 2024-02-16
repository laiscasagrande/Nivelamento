import { useForm } from "react-hook-form";
import Inicio from "../../assets/images/Montanha.jfif";
import { api } from "../../services/axios";
import { Container, Logar, Menu } from "./styles";
import { LoginProps, UserProps } from "../../Models/Types/login";

export function DoLogin() {
  // *  O handle e o register fazem parte do formulário e o register é o responsável por registrar o login e a senha
  const { handleSubmit, register } = useForm<UserProps>();

  const getLogin = async (event: UserProps) => {
    //o event foi determinado pelo back e o login e a senha sao passadas atraves desse event
    const { login, password } = event;

    try {
      const { data } = await api.post<LoginProps>("/auth/login", {
        //retornar login e password
        login,
        password,
      });
      localStorage.setItem("token", data.token); //guardar o token no localStorage para que possa ser armazenado
      window.location.href = "/carousel";
    } catch (erro) {
      console.log(erro);
    }
  };

  return (
    <Container>
      <Logar>
        <img src={Inicio} alt="" />
      </Logar>

      <Menu onSubmit={handleSubmit(getLogin)}>
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
    </Container>
  );
}
