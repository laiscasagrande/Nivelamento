import { NavLink } from "react-router-dom";
import Delete from "../assets/Delete.png";
import Left from "../assets/Left.png";
import Right from "../assets/Rigth.svg";
import View from "../assets/View.png";
import { Navbar, Sessione, Tabela, Upload } from "./TableCss";
//import { Modal } from "../Modal/Modal";
import { useEffect, useState } from "react";

import { api } from "../services/axios";
//import {ModalContainer, ModalContent, CloseButton,  } from "../Modal/ModalCss"
import { ModalComponent } from "../Modal/Modal";

type ImageProps = {
  id: string;
  image: string;
  extension: string;
  sizekb: string;
  created: string;
};

export function Table() {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  const deleteImages = async (id: string) => {
    try {
      const { data } = await api.delete<ImageProps[]>("/image/" + id);
      // const deleted = images.filter((images) => images.id !== id);
      // setImages(deleted);
      getPosts();
      return deleteImages;
    } catch {
      //
    }
  };

  const SelectImage = async (id: string) => {
    try {
      const { data } = await api.get<ImageProps[]>(`/image/${id}/file`);
      console.log(data);

      return data;
    } catch {
      //
    }
  };

  const [isOpenModal, setIsOpenModal] = useState(false); //um modal sempre começa false


  const openModal = async (id) => {
    try {
      const imageData = await SelectImage(id);
      setSelectedImage(imageData);
      setIsOpenModal(true);
    } catch (error) {
      console.error("Erro ao abrir modal:", error);
    }
  };

  /*function openModal() {
    setIsOpenModal(true);
  }*/

  function closeModal() {
    setIsOpenModal(false);
  }

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
                    <button onClick={openModal} >
                      <img src={View} alt="" />
                    </button>
                    {/*quando o usuario clicar, vai mudar/setar para true*/}
                    <button onClick={() => deleteImages(data.id)}>
                      <img src={Delete} alt="" />
                    </button>
                  </td>
                </tr>
              </table>
            ))}
        </>
      </Tabela>

      <ModalComponent isOpen={isOpenModal} closeModal={closeModal} selectedImage={selectedImage} >
  {selectedImage && (
    <div>
      <img src={selectedImage.url} alt={selectedImage.description} />
      <button onClick={closeModal}>Sair</button>
    </div>
  )}
</ModalComponent>


{/*<ModalComponent isOpen={isOpenModal} closeModal={closeModal} imageData={SelectImage}  >
       
       <button onClick={closeModal}>sair</button>
  </ModalComponent>*/}

    </>
  );
}
