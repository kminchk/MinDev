import React from "react";
import Img1 from "../../assets/Img_animal/alpaca.png";
import Img2 from "../../assets/Img_animal/bear.png";
import Img3 from "../../assets/Img_animal/panda_bear.png";
import Img4 from "../../assets/Img_animal/crocodile.png";

function ImgAutoSlide() {
  return (
    <div className="w-full">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={Img1} className="w-full h-64 object-contain" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={Img2} className="w-full h-64 object-contain" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={Img3} className="w-full h-64 object-contain" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={Img4} className="w-full h-64 object-contain" />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImgAutoSlide;
