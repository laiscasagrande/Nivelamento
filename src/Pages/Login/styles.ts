import styled from "styled-components";

// interface IColor {
//   color: string;
// }

// export const Logar = styled.div<IColor>`
// background: ${({ color })=> color};
//   img {
//     width: 66rem;
//     height: 54.5rem;
//   }
// `;

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logar = styled.div`
  height: 100vh;
  overflow: hidden;
  img {
    width: 66rem;
    height: 100%;
  }
`;

export const Menu = styled.form`
  padding: 0 6rem;
  font-family: Montserrat;

  input {
    padding: 1rem;
  }

  input,
  button,
  h1 {
    display: block;
    margin: 1rem;
    width: 24rem;
    height: 3rem;
    border-radius: 8px;
  }
  button {
    background-color: rgba(0, 143, 251, 1);
    border: none;
    color: white;
    font-size: 16px;
    text-decoration: none;
  }
`;
