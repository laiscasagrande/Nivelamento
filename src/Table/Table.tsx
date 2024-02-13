import { Navbar, Sessione, Tabela, Upload } from "./TableCss";
import { NavLink } from "react-router-dom";
import Left from "../assets/Left.png";
import Right from "../assets/Rigth.svg";
import View from "../assets/View.png";
import Delete from "../assets/Delete.png";
import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";

import { api } from "../services/axios";

type ImageProps = {
  id: string;
  image: string;
  extension: string;
  sizekb: string;
  created: string;
};

export function Table() {
  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {  //cada vez que a página carregar, ele executará isso primeiro
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const { data } = await api.get<ImageProps[]>("/image"); //api que foi definida no outro coponente, .get e a rota definida pelo back end para imagens
      console.log(data);
      setImages(data);
    } catch (erro) {
      //e colocar a resposta aqui. Resposta de erro, caso tenha
    }
  };

  const [openModal, setOpenModal] = useState(false); //um modal sempre começa false
  return (
    <>
      <Sessione>
        <NavLink to="/" title="">
          <button>Encerrar sessão</button>
        </NavLink>
      </Sessione>
      <Navbar>
        <h1>Tabela</h1>
        <div>
          <NavLink to="/table" title="">
            <img id="button1" src={Left} alt="" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/carousel" title="">
            <img id="button2" src={Right} alt="" />
          </NavLink>
        </div>
      </Navbar>

      <Upload>
        <NavLink to="/upload" title="">
          <button>Upload de imagem</button>
        </NavLink>
      </Upload>

      <Tabela>
        <>
          {images &&
            images.map((data) => (
              <table key={data.id}>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Extensão</th>
                  <th>Tamanho</th>
                  <th>Data de criação</th>
                  <th>Ações</th>
                </tr>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.image}</td>
                  <td>{data.extension}</td>
                  <td>{data.sizekb}</td>
                  <td>{data.created}</td>
                  <td>
                    <button
                      onClick={() => {
                        setOpenModal(true);
                      }}
                    >
                      <img src={View} alt="" />
                    </button>{" "}
                    {/*quando o usuario clicar, vai mudar/setar para true*/}
                    <button>
                      <img src={Delete} alt="" />
                    </button>
                  </td>
                </tr>
              </table>
            ))}
        </>
        <Modal isOpen={openModal} /> {/*aqui está como false*/}
      </Tabela>
    </>
  );
}
