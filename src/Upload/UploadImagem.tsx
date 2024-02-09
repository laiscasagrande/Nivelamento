import {  useState } from "react";
import { Header, Buttons, Upload } from "./UploadImagemCss";
import Drop from "../assets/Dropzone.svg";
//import { UploadContext } from "../Context/Context";
//import {Carousel} from "../Carousel/Carousel"
//import Dropzone from "react-dropzone";

export default function UploadImagem() {
 // const { getFile, file } = useContext(UploadContext);
  const [file, setFile] = useState();
  function getFile(event: Event) {
   // setFile(URL.createObjectURL(event.target.files[0]));
  }

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
            onChange={ (event) =>  setFile(URL.createObjectURL(event.target.files[0]))}
          ></input>
          {file ? (
            <img src={file} id="file" />
          ) : (
            <img src={Drop} alt="" id="dropzone" />
          )}
        </label>
      </Upload>
      <Buttons>
        <div>
          <button id="register">Cadastrar</button>
        </div>
        <button id="cancel">Cancelar</button>
      </Buttons>
    </>
  );
}
