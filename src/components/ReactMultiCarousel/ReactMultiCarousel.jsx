import instagramImg1 from "../../img//instagramImg1.png";
import instagramImg2 from "../../img/instagramImg2.png";
import instagramImg3 from "../../img/instagramImg3.png";
import instagramImg4 from "../../img/instagramImg4.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ReactMultiCaorusel = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
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

  const instagramFeedImg = [
    {
      id: 0,
      img: instagramImg1,
    },
    {
      id: 1,
      img: instagramImg2,
    },
    {
      id: 2,
      img: instagramImg3,
    },
    {
      id: 3,
      img: instagramImg4,
    },
    {
      id: 0,
      img: instagramImg1,
    },
    {
      id: 1,
      img: instagramImg2,
    },
    {
      id: 2,
      img: instagramImg3,
    },
    {
      id: 3,
      img: instagramImg4,
    },
  ];

  return (
    <>
      <div className="instagramFeed-content">
        <div className="container">
          <h2>Instagram feed</h2>
        </div>
        <Carousel responsive={responsive}>
          {instagramFeedImg.map(({img}) => {
            return (
              <div className="insta-img">
                <div className="img-blurArea"></div>
                <img src={img} />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ReactMultiCaorusel;
