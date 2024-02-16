import { NavLink } from "react-router-dom";
import Right from "../../assets/icons/Rigth.svg";
import Delete from "../../assets/images/Delete.png";
import Left from "../../assets/images/Left.png";
import View from "../../assets/images/View.png";
import { Navbar, Sessione, Tabela, Upload } from "./styles";
//import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";

import { api } from "../../services/axios";
//import {ModalContainer, ModalContent, CloseButton,  } from "../Modal/ModalCss"
import { Header } from "../../Header/header";
import { ModalComponent } from "../../Modal/Modal";

type ImageProps = {
  id: string;
  image: string;
  extension: string;
  sizekb: string;
  created: string;
  B64file: string;
};

export function Table() {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageProps | null>(null); //estado para guardar a imagem selecionada. Ela pega os dados desta e retorna null caso nao encontre nada

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const { data } = await api.get<ImageProps[]>("/image"); //api que foi definida no outro coponente, .get e a rota definida pelo back end para imagens
      setImages(data);
    } catch (erro) {
      //e colocar a resposta aqui. Resposta de erro, caso tenha
    }
  };

  const deleteImages = async (id: string) => {
    try {
      const { data } = await api.delete<ImageProps[]>("/image/" + id);
      getPosts();
      return deleteImages;
    } catch {
      //
    }
  };

  const ViewImage = async (id: string) => {
    try {
      const { data } = await api.get<ImageProps>(`/image/${id}`);
      setSelectedImage(data); //guarda as informções solicitadas pela API
      openModal();
    } catch (error) {
      console.error("Erro", error);
    }
  };

  const [isOpenModal, setIsOpenModal] = useState(false); //um modal sempre começa false

  function openModal() {
    setIsOpenModal(true);
  }

  function closeModal() {
    setIsOpenModal(false);
  }

  return (
    <>
      <Sessione>
        <Header />
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
        <table>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Extensão</th>
            <th>Tamanho</th>
            <th>Data de criação</th>
            <th>Ações</th>
          </tr>
          {images &&
            images.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.image}</td>
                <td>{data.extension}</td>
                <td>{data.sizekb}</td>
                <td>{data.created}</td>
                <td>
                  <button onClick={() => ViewImage(data.id)}>
                    <img src={View} alt="" />
                  </button>
                  {/*quando o usuario clicar, vai mudar/setar para true*/}
                  <button onClick={() => deleteImages(data.id)}>
                    <img src={Delete} alt="" />
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </Tabela>

      <ModalComponent isOpen={isOpenModal} closeModal={closeModal}>
        {selectedImage && (
          <div>
            <img
              src={`data:image/jpeg;base64,${selectedImage.B64file}`}
              alt="Image"
              className="modal-image"
              id="file"
              width={400}
              height={400}
            />
          </div>
        )}
        <button
          onClick={closeModal}
          style={{
            backgroundColor: "#7D7D7D",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            cursor: "pointer",
            margin: "0 auto",
          }}
        >
          Fechar
        </button>
      </ModalComponent>
    </>
  );
}
