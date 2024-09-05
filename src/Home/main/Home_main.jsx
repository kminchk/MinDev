import React from "react";
import Modal_btn_home from "../components/Modal_btn_home";
import ImgAutoSlide from "../components/ImgAutoSlide";

function Home_main() {
  return (
    <div className="flex flex-col">
      <div>
        <ImgAutoSlide />
      </div>
      <div>
        <Modal_btn_home />
      </div>
    </div>
  );
}

export default Home_main;
