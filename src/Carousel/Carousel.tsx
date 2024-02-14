import { Container, Navbar, Sessione } from "./CarouselCss";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Left from "../assets/Left.png";
import Right from "../assets/Rigth.svg";
import { NavLink } from "react-router-dom";

import { api } from "../services/axios";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";

type ImageProps = {
  id: string,
  image: string,
};

export function Carousel() {
  const [slidePerView, setslidePerView] = useState(1);

  const [images, setImages] = useState<ImageProps[]>([]);

  useEffect(() => {
    //cada vez que a página carregar, ele executará isso primeiro
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

  const data = [
    {
      id: {images},
      image: { images },
    },
    // {
    //  id: "2",
    //   image:
    // "",
    //  },
    //   {
    //     id: "3",
    //     image:
    //       "https://img.freepik.com/fotos-gratis/cenario-de-tirar-o-folego-do-parco-naturale-di-fanes-sennes-braies-prags-italia_181624-17935.jpg?w=1380&t=st=1707325798~exp=1707326398~hmac=6d21a5ea224703f93b0808088d1b786f7690dd3fc150427f84ef2b5a9c18ffce",
    //   },
    //   {
    //     id: "",
    //     image: "",
    //   },
  ];

  useEffect(() => {
    //criar um efeito colateral

    function handleResize() {
      if (window.innerWidth < 720) {
        //se a largura da janela for menor que 720
        setslidePerView(1); //mudar o usestate que tava de 2 para 1 slide
      } else {
        setslidePerView(2); //se nao for menor que 720, vai ser 2
      }
    }

    handleResize(); //a função vai ser executada aqui

    window.addEventListener("resize", handleResize); //sempre que fizer o resize na tela, chamará a função

    return () => {
      //quando sair do resize, desmontar
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sessione>
        <NavLink to="/" title="">
          <button>Encerrar sessão</button>
        </NavLink>
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
                  src=
                   {item.image}
                  
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
