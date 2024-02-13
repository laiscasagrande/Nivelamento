

import { Container, Navbar, Sessione } from "./CarouselCss";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import Left from "../assets/Left.png";
import Right from "../assets/Rigth.svg";
import { NavLink } from "react-router-dom";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { useState, useEffect } from "react";
import { api } from "../services/axios";

export function Carousel() {
  const [slidePerView, setslidePerView] = useState(2);

  /* ************************************************************************************************************** */

  const getPosts = async () => {
    try {
      const { data } = await api.get("/image"); //api que foi definida no outro coponente, .get e a rota definida pelo back end para imagens
      console.log(data);
      setslidePerView(slidePerView);
    } catch (erro) {
      //e colocar a resposta aqui. Resposta de erro, caso tenha
    }
  };
  getPosts();
  
  /* ************************************************************************************************************** */
   const data = [
   {
     id: "1",
     image:
       "https://img.freepik.com/fotos-gratis/a-beleza-tranquila-da-natureza-refletida-na-ia-geradora-de-aguas-calmas_188544-12798.jpg?w=996&t=st=1707325045~exp=1707325645~hmac=853e7f8da17cc9abfe6fc966c2b5acb4f2e22cc6abd86454586976c860fb325e",
   },
   {
      id: "2",
     image:
        "https://img.freepik.com/fotos-gratis/pico-majestoso-da-montanha-refletido-na-ia-geradora-de-agua-azul-fluindo_188544-12739.jpg?w=1380&t=st=1707325907~exp=1707326507~hmac=270aaf35d83a575c127b8c62a7cbc8d8037aa50a953b35ca096fbb9531370613",
    },
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
          slidesPerView={1} //a usestate vai controlar quantos aparecerão
          pagination={{ clickable: true }} //para ser clicável
          navigation
        >
          {data.map(
            (
              item //map para percorrer as imagens
            ) => (
              <SwiperSlide key={item.id}>
                <img src={"/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcWFRQYFxUXGh4bGxobHBsgGx4dGyAgHB4dHhsgIiwmIR0qHx0dJTgmKy4wMzMzICI5PjsyPSwyMzABCwsLEA4QHRISHjQqJCozMjQyMDIyMjI0MjI0ODIyMjQyMjQyMjQ7NDI0MjswMDIyMjIyNDMyMjIyMjIyMDQyMv/AABEIAO0A1QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcCAQj/xABBEAABAwIEAwUFBgUDAgcAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGx8AcUI0LB0VJicoLhkrLxFcIWJDM0Q6Li/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAKREAAgICAgECBQUBAAAAAAAAAAECEQMhEjFBBFETImFxkTKBobHh8P/aAAwDAQACEQMRAD8A7KvJcAvS1nEOGNeHHO9hiZzEi3NpkR4QuO60dVeSacSwbheXYxo3+joqTg6ziAST3rxO9tfisjqwbvG/j4fOeqz/ABmWcEXH743mPVfW4tp3HqFQKnFjMNJJ2Av9GVIpnFRmNF8c8r59NVxZZHeCL03ENO69hw5qj/8AVnMPeY5hvqCCfCRePrptMLxhp/MPTX618jyUlm9zjx+xZkUPD4wO3+uilgq6MlLoraaPSIikcCIiAIiIAiIgCIiAIiIAiIgCIiAIiID4tX2ixGTDvI1cMo/usfhK2iqvbfEZW0mc3Od/pAH/AHqE3UWSirZoaVSwJIG0Hlp/hR8ZVItFjvlMf6tF9aTpNrc7QD+8x+6+Yh73CMwaGjUyJ5xKxmg33YXAD8Ss4S4OyNPKwc4jxkDyKuS0nZRoGHgfxunxlbtbIKoozz/UzxUYHCCAQdiJHoqt2g4IxjTVp9yIzN/LcgSORBjorYtdxfhxrtDc+UAybTJ23GiTjyQi6ZTcJj3M1Mj6/b6i9o4ZxUOIaTc89Vqq/ZKoJLKoceRBb+pWsdSrYdwztLRNnbHz0n4/rn4yg7LbUtHQ0Wr4PxAVGxMlbRaYytWUtUz6iIpHAiIgCIiAIiIAiIgCIiAIiIAiIgPio/2gOipQ5Fr/AJt/wrwqd9o2HJoMqAT7N8Ho14j/AHBoVeRXFkodldpPka3J/Qa+gWZ7M2UCAZiNCPAEQRcX0Wpw1QQB6/8AHktpSxJsNRykADwOqxmmi3dkHfhvbyeT/wBvrLSrCqZwPEFlSSe6bO6SdfIwfVXNa8UriZ8iqR9REVpALHUYHAggEGxBEg+IWREBoK/CjSd7ShMC5Zr/AKf29OS3GFrB7GuGhCzLwxgEwIkyfFRSp6Ot32ZERFI4EREAREQBERAEREAREQBERAEREAUTiGEbVpvpu917SD0nQ+IN/JS0QHEnUHUKzmVJDmGDqL7GeRF1uaeMIMi/6A/MePkrV2w7Pe3aKlMfisGn8TeX9Q29FzmnXIJadpEEGQeUHTw1WLJBxZphJMvGCxgcAx2kHMY0M2M6fRHRWDheOBPs3OBI90/xNG3iPl5rnFHFaCbTGt7e74+O1lu+H4lphmbQgzJzAki4PP8AfayjjyOLJSxqSOhotHhOLkQKots8C39w2P1ZbinUDgC0gg6EGQtsZqXRmlFrsyoiKREIqxxbtlhsO4seTmtGmUySJkEwBlO3LmqfxD7WO7+DREhxu50ggG1hBkjXbxXLO0dWRcYw/wBqeKY056dOpdsWIIG+huY6bqycK+1PD1HRWpPoiTDpDm+dgR6Loo6GiqVb7QuHtE+2LrAw1rtzG9p6arZYLtVg6ob7PEMJdENvmk6COfRBRvEXhjgRIMg6L2hwIiIAiIgCIiAIiIAiIgCIiA+KqdqeybcRNSlDK2+zX+PJ3X15i1ouNJqmdTa6OF4wVKLzTqMLHt2cN7w4HfxFlnwPEMpEHfW+ovtsuu8V4TRxLMtVgcNjoR4OFwue8a+zqqyXYWpnb/A6Gv8AJ3uu+Czzw+xfHL7krCcVY4EZozWAmCDl0t1APkt9gMYAS0P1mHT3rEtg7OsBc9dVyrE0sTh+7UZUp7XBb6Ei/iFlpcdc1wknTfXWdf8ACq4yTLLTR1zGcZ9gxz6j2lg0MHM48gG7+S5n2o+0qpXYadBppMMhzplzm8pHu9YnxWk4/wAddVa1susT+jvgWg+SqgrNAMX3/wALTjba2Z5pJ6JeKrue/M4lxNj4WG6jEXiC2Ttv/j5rxUrEjl5qQ7COlsXcY5yVJtI4k2eGNIsXdB4+AnwUptNw99jhbXK4eRtr+q23B8BlcX1AARoI0trKsOHxFOpIaWuizhGniDt1VM81PSNcPTcl8zplJdTbEWvBi8Aaa9VgFVzHNLZkEXFrjSCugfd2ttkA56fqqv2o4eG99ggHWOex8/2SGZSlRzJ6VwjyTs33ZPt9Ww806hNRmve1B371jEc50C6/wfjVHEtDqVRrrAkA3EiQCNj+xX5h9pGjjPUCD5qxdmeLvoVGOZULSYmLyQYAIP5SCRtZX3Rlqz9Hr6qxwHtTRqsa19VrasXzDKD1BNvoWVmBXU0+iLTXZ9REXTgREQBERAEREAREQBERAEREBjqMBBBAIOoIkHyVd4p2VwBa578NTbAklpNMeJLSBHirMud/ajxStRYxga04eoIcM0Pc6T3RBmA0TMR6LjOo5d2jdRFVzcOXGmNS+J6xG3LU9VXw7vX7o2gKVjKkvc4NyNJkC8CdAJ5KO/Dudp3zMWFh4kqPRJ7PD2RJFx9brb8KrGWucBmAieY69eq2XBsEKc+2LSKrQzNHdYZBpu/pziD49F44rS9nUALcpAhwGx8VVOXLSNGOHD5mzdiuxze8wkf0k/L5qM7AML2OaTTLNHd+4nNdwsdct5taLL5wzGd2JUwUZuyWn+R5b8II+CzbizdaklZGfgRVdU9pVNR2YZBILGgGT3LXIgXHM9FIxGFb7NzHGREX+HovoYPzue7o4j5gAqFiGCoXUw4tblcXO1IAG3XQLlttHajFPXZUMezK5jDEgSRynn5LJhYa5pkR8rz67eqz8UwFOmfww5wykmd9wT11stnw/CmjUcHUs7hlyl0ZLQd7EEEgi4IJWzkkjzeDciVhsWNZ+vqT5BbXBdoa7LMrva0EQ0OOX0PntsqdjMPVpuc6GZS4mGRDQSe7lBkATG9l9wONvB3+gVXxa2ifLwzrXB+37xAxDM7bd9gAcPFuh12hWPFdrcOKYfTcKjnGA2crhuS4G4A8LlcYZX0j60//ACs1Z4eATtoQSCN4kHe48k+JJKjixxbto7FwvtZQqA53Cm5pggyR4gx81vqVRrgC0gg3BBkHzXBMPxCpSa9rWjL3i1wPeAcTtqXX67KycH4zGT7s8hwEvmQ2OTmTfTVdWZr9SJv08ZfpdP2OuIq/2b7QNxOZpgVGagGxGkjz28FYFojJSVoySi4umfURF0iEREAREQBERAfFyP7WuA1X1mV2Nc9hYGmNGlpi+15+fJdB7ScfZhKeZ3eqOnIyYLiNzyaJEnqFyvH8VxeKqZ6rpaNGgxTb4N3PUz+orlNL7lkIOW/BXKHBy6BU5TlFrgak6nSFuMNQYwRAywCRHdIIk/C/j5xkoYVxb/M8xPQb+H6+K+1xAi+Z143jmfGx9BaFTLk+zVBRStGJ+HkZabTVp1LZGgl17d0RM/8ABW04j2eqNw9MYqA90tY8kZuTGvP8Qsf1tAh4LH4mjIp1302m5aA0tmYnvNJBtzHyXzFVHYhzX131KjmEd0kQ4EwQ1p7rHHT0UWn/AKK31+xU61OtQcQ9jhG8fp+uik4ftD1CtnFMW9zmuZQYMMxjWtpi7mNHvOa5pkvkk6mYbfda/E8PwwFOoYDKrS9ri0uaIJa5pcG9xwIv00PI2n2vwFyj0/yaccVdUIawXO5Ngp1Jrm9xonN7zzBzGDAGoDZ21UqjhKPvNqUomJaYk22Au6DbrrOql0TTBLs/tMl3BgcSYu5rZiHcokeKjcUSuT7ZrH4IOcGsAzuvIA0i0wPO/Tmty+nXFSo+k2lVotcTkqaGBoBMu8Qem0L7jXUqRZUYw1MFWBcHsc9zyLEh5s4BplpaDOhcdVu+AMFZh9jRYWOJDXuy5GtFrROYjkEm3a0cVU9lZrPq1IIpMp/ysbDbxu8k6W18hvXOMcKc0+1GUCe8MzbTvAPP91e+0XA/Z1cjXlwc3M0kNIiwIPnPwWhxOCBzNix7twJ71hBAj5bXEqalXsRcOSvf5K4ypcB1pInwOvzK3VcsfTHs6ZbUYPxBNnAfmE6mYPqqu2obtLbzB8uXJSxVqNdAdaBy6/suygxCcaaaJDMTGtvr6HpyUh9cEg6x105/v68lHp1Z1+K+mgOXoov6nVH2ZYOBccdhnh7MosQRFiDt8l17Bcca9gcW6ja64v2b4EMTiGUjUcwPnvQDGVpdYHU2+oXR8J2YxVAezbUbVYbNce6Wj+Zt7DmCfBTjyStFWSm6l2XgFF5otytA1gAeiLSZjIiIgCIiA+LFXrNY1z3kNa0EuJ0AAkk+SyqofaZiyzBOa0wazmsnpdzvUNjzXG6OpWc241xp2JxFSu4HKYFNpN2sbOUR1mT1JWaiwENB7z88emsDYTZaKjSeJsbx1mLiD5Le06JBc4NJqGQAL25xsSIn9JVDrlZqi3xqjYuIiNZt1ytmY6kg+oWq+8hziepFt4uJ8ZMeBU6o1zSTBhrD6gR8QAtPh2DZoOu5mBBJjQi4XOSZLi0bARlMkT05fML3h8OXTGoEXnWWkabjLNuiwsbGottcjxvNlJo4lze60G+9reAsP3808aO+dn2ng6oPcZTcLf8AyOYZG3dYbfHVTawqAtDoE91rWNcQJOjZBLjJkk3Jnms2HxTCIfBN50UXEYt9OX0i41Gw5jQHHRwJbvqJ6KFNvaJOklxf8m54z2fc6gJpkCm0nM3IXO95xc+LtdMXabX5CK9hqgp4oVa4DqNceze4/ke+7Xz1uOhFtVtsL2zxdUAOwxYwtLczwGiT+Ykukxyy3+UKrQa9hpvyvpu97OSCDzDgBPwUlVVRVUm7bJFDhYY57ZIBcc+zXOHuvA0mIOYHNtOqz0KHsXZ6R9m780DuOi3fZodBcQ7aYUGhhqjGhuYvY33DMuy6gEyJjY/R9459RzQGtd+v1+6hJW+y+GotNf6TMZxB1bKXtDXNEd0kyDebgEeF/FV6rihmAeYvqJEW5+cT1K9mjVBnvGOh5bHfx/daythah1aZBgk2BHOTbb5Ioxt7IubUUkit4rDkVKmg77p5C5tCYfvOm52jcgW9f8q79oPsyxQPtMO4Yhr+8WkhjwTc2JyuHWQeh1VUr8NqUSGPpvpv3a9pB8YMT4hXvS2Z1TejM2kCO6bxpy8vFefZidAsQdOovzvPrPzH7rbcC7PV8W/LRa6Ae88khjB1JHwEnooV7EuXuW77LeHzWdVizGRP8zrAdbZl1Vajs5wVmEoNpNJcZLnvOrnHUn4ADkAtur4qkZ5y5Oz6iIpEQiIgCIiA+LjH2g8dOIxBp0zNOlLGxoXfnedonujaATuul9r+K/dsJUqAw8jIz+p1gfIS7yXD3UjAgy0RoPHUba630lVZJeC3FC7ZLwtSAJidyNAPOZ8rXW4wFUZSTOXTK3z97Q/pfTdaKm23QkekGPjHqpjHDMWta6R4HzvFv3VNKzVbo3WMZTIdlOUtBvp01i4VFw9VzZAPuuLZiR3TBMaTtfkt/iandIFzG1rC5+XwWk4XiW6TeSfjKK1vs46k66+xOpYom9ieo5dWwdRFlsaTHvEFsNIsYA8p36ELDh8UT3XOyuMtBGk25iQb84WdjpOV4kmIcQILtgRJB1IkdVxthRX3J2F4fHvO8h+62Pt20xDGjMdv1JWrwFQsa4PzQ0AyRe4mB52809o4kXhzhmPgTAA6fp5qMYuT2y2UoxiuK2bAPLjJu7mfPoRtpC9EmB3dCfA6HWL3t6+Ch+1yx3nAHmbWnW+mnxWUYuQTNxeY6XV9exnvw+zI15ae76bH/PVesViJpywwSQB0JMKMKs7j6H15LzmzZhY5uemYXEx0HwVU47suxydNLyYa1bKxveIL7AyTlFpOvP5+K81nn8NpcZJl0jUe7EddfU2Xp7g6oe8QG90xYAATMzIvPp1XjhTfvGIaAJcXhoubNNhb1JXKsN15+n+nZsC2KbBya35BecbgqdVuSpTa9p2cAR8d+qkgL6tlaPPvdlapdiMADm+7gmZEueQPIu+a32EwlOk0MpsbTaNGtAaPQLOiJJdBtvs+oiLpwIiIAiIgCIiA5r9rmOc37tTHukue/wAsrW/7nKiUqjM3dMRv+X1+tOitX2s/+7ojb2Jj/U6fgqXSa1pi5n8u/wAFTNWzRjbSLFh8Ix7DPcMWI90725GbzcKFVqGk85hffqNiOiyYCvlaQ0nW7Dp11912vwWLH1qVSRJygTJ28DqPJUyiXRmvsyVwoUqrqjnB3saNN9SqBLZABDWSNC50Af3clT8PhXWzkT09PUG3mF1DijKGD4IKYexlXFUw8Z8xNRxDXvE7HJYTYWC5WzF3yn62MeUHxarePFUipz5O2b7C0w5pmHOYb8y3pG/7KTQJczvN77b96RIAMGbaE7rUYXF5Xg8jld9eN5WyqOyua4GwBttuSPS3kq2q0Wxaav8AJNe+WMmJee8Rvl7oPqQV7ZimOLX58hAALY5bKFUeO5l93KY8y1RKDS7bWwMwJ/4lIxTQlNqWtm2xuKa9wDNByG5XqlWBb7gJ0Gt4F9CNvVRabxJy8hDjEyLCIiNdTqFmZiCMozugbCBpoLbbePNdukkjiVtt+fofW4q85RYeQjeOe11kdiwX2iBB0Au0/tKjsqkaQ4zNwI8TuOf/AAsTxDwR7pbO1rRFuvqutpnEnHpkvGvc3MAC4udYR+UXOg0JMX6qy9g8MPvd/wArXvEAACSGtFujj5qtucC97nGzcto3AJ8/en0Vn+zrGM9vVDgfaOaL2ytaDeTOpJpgAaqGPbRPM+MX+DpiIi2GAIiIAiIgCIiAIiIAiIgOZfazRIfhniYIqMJnfuuA8+96FUai/mb+JC6v9pWEFTBlxE+zqMd6nIf9/wAFzCkVmyumbMCtEnDsBk2J5+msa7/Be8Lw19euynTzBzzBIg5W7uJ2ABJ+GpCk8Prwb6FbrgmO+7VHVGsDg5uUjQxM2KqU1as0Sxvi+PZX/tC4oalSrQcXsZhHMFFuVgBhha973EZjMgNaIaRJMqr4HCU3gjM4GNC12XlIka+ZW37SU31MU97qjavtAHmQWhhcXEUzbvZBAkWNtNsbaeRvec2bRYtF7fmJkqyc/Y8qcnH5fJBqYKk/2gZHtADcSdOYmF6oPc2GEhxgdDpyJUzC4drHtIYGkaOZ3bcjG3QrccQo0zTzkAAGDJIg+IBjxhQc/HZdhyW6un/BWcRisobrIJInW9xPmF4w2JHejWDbe4PlC2X/AEinUbLKj/E5Kmt9WEH/AOqxs4I9o99hjQkPbz/iYF1TXRdOMuVpa0Y6eKBAAJta/wC/15LwcS6RdwnlYR0G6wu4bUbEBrr6tc0/rI5KfguzeLcwPDQA4CMz2Zddy0knw08V1zilbaK5SklbRiZXjU6E68josLuINBZcXMeMum3qs+M4BUZPtqlMGC7KHONr3s24tCy8OoQ5jqTXZQRme4jvjcBpkDx2E31RTi1Yc2kmzHXrufMCACb7ZgNT6aeC3nBKRw72PcO+Idktz1NjF9LGeVl9e8Me1rQ1rToROaDbNMSPeHun0UbBZW03OLjlvmdLi61hfWZI9dlC3So7nbeNZO7Z1ThfHvagkAPiM4ZZ7J0JpkmW/wAzXOJNosY3NCu1zZaQR05ixB5EGxGy5zwwMLKbsOxzMXhmZcrXf+tTAGZsmxqR3hm1IvZxi88IxrKrcwADnAOJAjM0juuG8EWvcEEG4WuEuSM6dq0bRERTAREQBERAEREAREQEDjOD9tQq0t3sc0dCRY+RgrhdE9II23X6CXGu3XDHYbGOeG/hViXtO2Y++3xzXjk4KnNG1Zo9PKnRr6D1OrVnBmZt4iR03+C0VPGAEg6c1Jo8QOUnK4sBgug5Z5ZtFjcWejGSMXEcxIe1rnbQOukm1tf8qLUaHhrK2QB2gMloI0BdbXnAWxr1KrSKTmltN7RUYS0tJBManUAjUdFB4rTgw11w0HMDo7MRY8wQrI+EzyfVOLytx/f7mbAMcyoKJBgAOYSZMD3mknlb1WzbRfULabbveS8NkA5Rcm+wm5UTAYplNodVOTKwQ0xmOewa29yYIjUbwrBhjVp4R2Id7SnUruDaeXKGMZBfcZpeCAWyRq6QIukU3K/+shhg3Mr3GcLBp1C1pBa4i0kXgz8F5w2Bc6k+oDUAFi5riGtLrNtMcvoo6rVdTawONIUnvALCZeHZBLpkWyWgAXOpMr7hu0VRlKthQ3M6o0zVLjmGrmujSRIAiNJ1lddsvzz5Sdut/wBDCYN5Y7PUqPdeJcRFjGnX1Vh7MVz92a0mTTc9nlmLm+eRzVouBYjPSpnNs0GeY7p11cSD8SpPAKns81ObPEt/qp2cPEtgx/IVRmi3FoxOUm3bJPaR4L6YgGQbcxcxP9vL0WtZiGCS5zYA/EIHda0fkb1tf/iMfaDFfiZ9qT2T/RBa7/eSvRpgjJAFOoCy2xcMvp9eF+LGvhovgucafgkYlrqgNPNFSm1j76HPmt6ggcrbSDhwNVstY6WudVaxzTIALnd0XtfM24t6Lzm9pUqBro9owta8bBp7pH+qR4L5xRpqUWy006lQubYwG1aRa4DNzdeDyaOYXG6pHJSko8PHZa+CYgiqWhrC41HNGaAe45wYM2rXagEHUwQRpdsRw3L+LREVQ4vyEw12aPaM5NzwDOmYZt3Ty7gDMVVqinWpZaz2e2ZmytFRlmuy7ZrlxGxJMCy6zwTE56LbkuaMr594ObYhw5q/EmrTIQtNolYauKjQ8TDhuII5gg3DgbEHQgqQvgC+q8mEREAREQBERAEREAUfE4ZlRuWoxr2nVrmhzfQ2UhEBEocPos9ylTZbL3WNFuVhp0UhrQBAAA5Be0QHOftOw9Q1MPUaM1Ok1+cAXElpBA37rHu6Bjj40LGPDi5oAgANEcnCR8TC75VoNd7wkQRB0h1jbqLevNcmZ2IfT4bWqvzDEA56YkjLTY5puOZAJvoMuhlU5MduzjjZVMZhaTJyMGbM0udcmXOG59fRbWhiqz2M9s4Qxoa1jZDQB+YibvO5Wvp4Vz6YY0gPyuNQu2c1zhJPWBHrspgqA025nZWVMrQRqA4D5CVCNJO/Bu9Kqbv6/wBGM1Q+nmH5hmHne/qjGBojKMwJYf7bC/8ATBUPCsdTpmmQRlcQJ1E3yk8xM+HgVMoFlSuykamRz7ExImLNnQPImJ6dAa2t0YWm3T7sw4HBmm3NTuA54LJv7xGZp/iDbeEbi/xmJLoIJDM8Z2xDXGSyDeTIHTnY3kYRns6r6F7VDAuTDtvhPmjXGji8RgqtOKT4AYPyOyNLXD+psE8jB5ru3dlnCLq/sesZhy9rwYl7YtpMRZQeFYsubkfq2AfLSfMXUzh1Vzs9Nx71IgX1IJytMc5IB8QsXEcIG4uGaODHOj+YkOHyPmpY3xtEsMXGW0ZsNFF2RzwwMAe10SPZnfewbmad7TaQrb2l4bTqYN+Ug6V6bhFyGzIIsQRaZ0IVYr9nxUL2ycl30yTcOcZc09MwB8z1Wfs/i6v4WDqgimQWNP5gCSDfkG2A/lCz5Ic5xkntMv8AhuraL52Hp+2wdJuIafvGGqOHeEPY4OJa7mMzCOjmki4KuGUTMX5qNw/P7NgeIe0BruRLbEj+U6joealr0kYz6iIgCIiAIiIAiIgCIiAIiIAiIgCxvYCCCAQRBBuCDsRyWREBwTtO00alXDMaWgPdJtcF0sAH8OUt+tdM6s7I1mWzZi4/Mf8ACtn2otb9/hl3OptL42dcCf7Q1V48HqFsg35fFZpcY6NmNSltENuKcTfWWhwmzg02k7ERr/mdyKhq1GYegxsVHtl0SS4usQemubpayq9dj2vyuDgfNXn7LKDfvrS+czWOLZ/iiP8AaXIkm0RerZdh2Tp/9RbWIOVrc45FzSIB6gkHwAWTtD2Kp4nE/ehUeyo1gAaA3KXNBguJGhBDSOQ1CuCK7iqozN2cHxD2trU6rQQ57CXN3BIgNP8Ac2/goVTEezqh5dmdN4vrbw8ldftA7K5H/e6QJYTNRmzXH88fwkmTyN9CYqzKObYNbeB4j/nY+SzOPDTNsHzXymzwVSoPeyguMOvmLdgOVpHO5XmuAXB2Z7iLtvcTc2bzspGDpM/MZ0PmN+W5Om6k4gUz7o/b0UOcVs0fCk9HTcBiPaU2P/iaD5kXHqpSpvY/iwH4DzF+4fHVv6jz6K5LZCakrPNy43jk0z6iIplYREQBERAEREAREQBERAEREB8UPiWNbRpvqO0aJjmdAB1JIHmpih8TwDK9M03zlJBsYPdIIv4hcd1o7GrVnIqwNR76ryC97yXH9uTQAAOkLI9wY17j7rZ3Got6Srv/AOB6AIIq1hGglhAHId2fUleX9g6DqZpurVy0/wAzJ9cixPDJvZ6i9VjS0ilHCtcM5IJG+U6+KmdnmxjsMWDvEukD+HKQ4noAVZ29imC3t35dIytn10+CsPCuD0sOCKYMuMkkyT0nl0UseFqVsrz+phKDS7ZskRFsPONdx0f+VrwJ/Cfbn3SuIU68ALvyrGI7DYJxJ9m5smYa9wHkJgDoFTlg5VRowZVCzneBqB1iY6lTqjQ0AkyDaRO9hrtKs1T7PKQvTr1Wn+YMcPQBp+K+nsNmGWpiSWbhrMrvJxe4D0KzPBKzdH1cK2VkMIIvBB578x+66H2b4n7elLvfb3XdeR8x8ZWub2Kp/mr1TaLZBbzaVueF8IpYcHJml0SXEkmJj5lW4YSjLfRn9Tnx5I6uzZoiLUYQiIgCIiA//9k="} alt="Slider" className="slide-item" />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </Container>
    </>
  );
}
