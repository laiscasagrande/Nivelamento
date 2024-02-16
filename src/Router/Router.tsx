import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoLogin } from "../Pages/Login";
import { Carousel } from "../Pages/Carousel";
import { Table } from "../Pages/Table";
import UploadImagem from "../Pages/Upload";


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