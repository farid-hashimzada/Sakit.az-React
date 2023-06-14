import React from "react";
import { Button } from "../bam/button";
import ProyektExampleImg from "../../img/ProyektExampleImg.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ProyektExample = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="proyekt-example-box">
        <div className="container">
          <h2>Layihə nümunələri</h2>
          <Carousel responsive={responsive}>
            <div className="proyekts">
              <div className="proyekt-content">
                <h4>г. Зеленоград, ЖК Мелодия Леса, д.1</h4>
                <p>
                  Проблема: В феврале 2018 года в нашу компанию обратился клиент
                  с проблемами посторонних шумов, которые проникали из квартиры
                  соседа за стеной.
                </p>

                <p>
                  Отзыв клиента о работе Шумовнет: Благодарим компанию Шумовнет
                  за решение нашей проблемы, связанной с громкими шумами от
                  соседа. В какой-то момент нам казалось, что мы зря потратили
                  деньги, но специалисты компании довели дело до конца, для нас
                  это самый высокий показатель в плане отношения с клиентами,
                  большое спасибо.
                </p>

                <Button text="Sifariş göndər" />
              </div>
              <div className="proyekt-img">
                <img src={ProyektExampleImg} alt="img" />
              </div>
            </div>
            <div className="proyekts">
              <div className="proyekt-content">
                <h4>г. Зеленоград, ЖК Мелодия Леса, д.1</h4>
                <p>
                  Проблема: В феврале 2018 года в нашу компанию обратился клиент
                  с проблемами посторонних шумов, которые проникали из квартиры
                  соседа за стеной.
                </p>

                <p>
                  Отзыв клиента о работе Шумовнет: Благодарим компанию Шумовнет
                  за решение нашей проблемы, связанной с громкими шумами от
                  соседа. В какой-то момент нам казалось, что мы зря потратили
                  деньги, но специалисты компании довели дело до конца, для нас
                  это самый высокий показатель в плане отношения с клиентами,
                  большое спасибо.
                </p>

                <Button text="Sifariş göndər" />
              </div>
              <div className="proyekt-img">
                <img src={ProyektExampleImg} alt="img" />
              </div>
            </div>
            <div className="proyekts">
              <div className="proyekt-content">
                <h4>г. Зеленоград, ЖК Мелодия Леса, д.1</h4>
                <p>
                  Проблема: В феврале 2018 года в нашу компанию обратился клиент
                  с проблемами посторонних шумов, которые проникали из квартиры
                  соседа за стеной.
                </p>

                <p>
                  Отзыв клиента о работе Шумовнет: Благодарим компанию Шумовнет
                  за решение нашей проблемы, связанной с громкими шумами от
                  соседа. В какой-то момент нам казалось, что мы зря потратили
                  деньги, но специалисты компании довели дело до конца, для нас
                  это самый высокий показатель в плане отношения с клиентами,
                  большое спасибо.
                </p>

                <Button text="Sifariş göndər" />
              </div>
              <div className="proyekt-img">
                <img src={ProyektExampleImg} alt="img" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default ProyektExample;
