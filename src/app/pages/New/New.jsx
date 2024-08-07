import Container from "@/app/Components/Container/Container";
import "./style.scss";
import Img from "../../../../public/Imiges/pngwing.com (1) 1.png";
import Img2 from "../../../../public/Imiges/pngwing.com 1.png";
import Image from "next/image";

export default function New() {
  return (
    <section className="new">
      <Container>
        <div className="new__box">
          <h2 className="new__title">Новые</h2>
          <p className="new__text">
            Все оригинале толька у нас и толька для вас
          </p>
        </div>

        <div className="new__flex">
          <div className="new__wrapper">
            <h3 className="new__wrapper-title">Наушники нового поколении </h3>
            <p className="new__wrapper-text">
              Risk more than others think is safe. Dream more than others think
              is practical.
            </p>
            <Image src={Img2} alt="" />
          </div>

          <div className="new__wrapper">
            <h3 className="new__wrapper-title">Смартфоны от ведуших</h3>
            <p className="new__wrapper-text">
              We are kept from our goal not by obstacles but by a clear path to
              a lesser goal.
            </p>
            <Image src={Img} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
