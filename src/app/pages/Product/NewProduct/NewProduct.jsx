import "./style.scss";
import Img from "../../../../../public/Imiges/RedragonK631Gery65_WiredRGBGamingKeyboard_2 1.png";
import Image from "next/image";

export const NewProduct = () => {
  return (
    <div className="product__div">
      <h3 className="product__new">Свежий продукт</h3>
      <p className="product__new-text">
        Все оригинале толька у нас и толька для вас
      </p>
      <div className="product__img-box">
        <Image src={Img} alt="" />
        <button className="product__div-btn">посмотреть</button>
      </div>
    </div>
  );
};
