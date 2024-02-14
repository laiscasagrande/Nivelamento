import { ChangeEvent, useState } from "react"; //changevent serve para lidar com estados
import Drop from "../assets/Dropzone.svg";
import { api } from "../services/axios";
import { Buttons, Header, Upload } from "./UploadImagemCss";

export default function UploadImagem() {
  const [file, setFile] = useState<File | null>(null); //serve para indicar que file pode ser uma imagem ou nula. Pode ser do tipo file ou null. Guardar a imgem armazenada pelo usuário

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => { //função para lidar com mudanças no input. Tipagem do evento
    if (!event.target.files) return; //
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => { //função assíncrona que é disparada quando o botão de cadastrar é clicado
    try {
      if (!file) return; //ele verifica se não há arquivo selecionado, se já houver, retorna sem fazer nada
      const formData = new FormData(); //objeto para armazenar os dados do arquivo
      formData.append("file", file); //Adiciona o arquivo ao objeto FormData, utilizando file
      const response = await api.post("/image/upload", formData); //fará a requisição para a API, enviado o FormData com o arquivo
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
