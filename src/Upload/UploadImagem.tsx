import { ChangeEvent, useState } from "react";
import Drop from "../assets/Dropzone.svg";
import { api } from "../services/axios";
import { Buttons, Header, Upload } from "./UploadImagemCss";

export default function UploadImagem() {
  const [file, setFile] = useState<File | null>(null); //serve para indicar que file pode ser uma imagem ou nula

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => { //tipagem para o input
    if (!event.target.files) return; //
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!file) return; //caso nao encontre, criara uma imagem de forma dinamica
      const formData = new FormData();
      formData.append("file", file);
      const response = await api.post("/image/upload", formData); //enviará para o servidor o formData, que é a imagem buscada
      // navigate("/table");
      console.log("Imagem enviada com sucesso!", response.data);
    } catch (error) {
      console.error("Erro ao enviar a imagem para o servidor:", error);
    }
  };

  return (
    <>
      <Header>
        <h1>Modal - Upload de imagem</h1>
      </Header>
      <Upload>
        <label>
          <input
            type="file"
            accept="image/*"
            className="picture-input"
            id="picture-input"
            onChange={handleFileChange}
          />
          {file ? (
            <img src={URL.createObjectURL(file)} id="file" /> //buscar a URL da imagem
          ) : (
            <img src={Drop} alt="" id="dropzone" />
          )}
        </label>
      </Upload>
      <Buttons>
        <div>
          <button id="register" onClick={handleUpload}>
            Cadastrar
          </button>
        </div>
        <button id="cancel">Cancelar</button>
      </Buttons>
    </>
  );
}
