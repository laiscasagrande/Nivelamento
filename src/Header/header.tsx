import { NavLink } from "react-router-dom";

export function Header() {
  function Logout() {
    localStorage.clear();
    window.location.href = "/login";
  }

  return (
    <NavLink to="/" onClick={Logout}>
      <button>Encerrar sessão</button>
    </NavLink>
  );
}
