import { Container, Navbar, Sessione } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Left from "../../assets/images/Left.png";
import Right from "../../assets/icons/Rigth.svg";
import { NavLink } from "react-router-dom";

import { api } from "../../services/axios";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { Header } from "../../Header/header";

type ImageProps = {
  id: string;
  image: string;
  B64file: string;
};

export function Carousel() {
  const [slidePerView, setSlidePerView] = useState(1);

  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    //cada vez que a página carregar, ele executará isso primeiro
    getPosts();
  }, []);

  useEffect(() => {
    //criar um efeito colateral

    function handleResize() {
      if (window.innerWidth < 720) {
        //se a largura da janela for menor que 720
        setSlidePerView(1); //mudar o usestate que tava de 2 para 1 slide
      } else {
        setSlidePerView(2); //se nao for menor que 720, vai ser 2
      }
    }

    handleResize(); //a função vai ser executada aqui

    window.addEventListener("resize", handleResize); //sempre que fizer o resize na tela, chamará a função

    return () => {
      //quando sair do resize, desmontar
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getPosts = async () => {
    try {
      const { data } = await api.get<ImageProps[]>("/image"); //api que foi definida no outro coponente, .get e a rota definida pelo back end para imagens
      setImages(data);
    } catch (erro) {
      //e colocar a resposta aqui. Resposta de erro, caso tenha
    }
  };

  return (
    <>
      <Sessione>
        <Header />
      </Sessione>
      <Navbar>
        <h1>Carrossel</h1>
        <div>
          <NavLink to="/table" title="">
            <img id="button1" src={Left} alt="" />
          </NavLink>
        </div>
        <div>
          <img id="button2" src={Right} alt="" />
        </div>
      </Navbar>

      <Container>
        <Swiper
          modules={[EffectCoverflow]}
          effect="coverflow"
          slidesPerView={slidePerView} //a usestate vai controlar quantos aparecerão
          pagination={{ clickable: true }} //para ser clicável
          navigation
        >
          {images.map(
            (
              item //map para percorrer as imagens
            ) => (
              <SwiperSlide key={item.id}>
                <img
                  src={`data:image/jpeg;base64,${item.B64file}`}
                  alt="Slider"
                  className="slide-item"
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </>
  );
}
