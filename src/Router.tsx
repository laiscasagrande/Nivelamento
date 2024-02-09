import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoLogin } from "./Login/DoLogin";
import { Carousel } from "./Carousel/Carousel";
import { Table } from "./Table/Table";
import UploadImagem from "./Upload/UploadImagem";


export function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoLogin/>} />
        <Route path="/carousel" element={<Carousel/>} />
        <Route path="/table" element={<Table/>} />
        <Route path="/upload" element={<UploadImagem/>} />

      </Routes>
    </BrowserRouter>
  );
}