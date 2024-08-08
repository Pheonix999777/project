import Container from "@/app/Components/Container/Container";
import "./style.scss";
import Img from "../../../../public/Imiges/81aot0jAfFL._AC_SL1500__2.png";
import Image from "next/image";
import ArrowUpRight from "../../../../public/Icons/ArrowUpRight.svg";
import { NewProduct } from "./NewProduct/NewProduct";

export const Product = () => {
  return (
    <section className="product">
      <Container>
        <div className="product__box">
          <h2 className="product__box-title">
            Все оригинале толька у нас и толька
          </h2>
          <p className="product__box-text">
            Goal not by obstacles but by a clear path to a lesser goal.
          </p>
          <button className="product__box-btn">get it</button>
        </div>

        <div className="product__flex">
          <div className="product__wrapper">
            <span className="product__subname">Macbook Pro</span>
            <p className="product__wrapper-text">Dark 16 32</p>
            <Image className="product__img" src={Img} alt="" width={288} height={267} />
            <button className="product__wrapper-btn">
              <ArrowUpRight />
            </button>
          </div>
          <div className="product__wrapper">
            <span className="product__name">Macbook Pro</span>
            <p className="product__wrapper-word">Dark 16 32</p>
            <Image className="product__img" src={Img} alt="" width={288} height={267} />
            <button className="product__wrapper-btn">
              <ArrowUpRight />
            </button>
          </div>
        </div>

        <NewProduct />
      </Container>
    </section>
  );
};
