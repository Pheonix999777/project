import Container from "@/app/Components/Container/Container";
import "./style.scss";
import Img from "../../../../public/Imiges/Снимок экрана 2024-07-29 в 09.51.27 1.png";
import Image from "next/image";
import ChevronRight from "../../../../public/Icons/ChevronRight.svg";
import { PhonesData } from "@/app/utils/data";

export const Phones = () => {
  return (
    <section className="phones">
      <Container>
        <h2 className="phones__title">Which iPhone is right for you?</h2>
        <ul className="phones__ul">
          {PhonesData.map((item, index) => (
            <li key={index} className="phones__list">
              <Image src={Img} alt="" width={196} height={260} />
              <div className="phones__color-box">
                {item.colors?.map((color, idx) => (
                  <span key={idx} style={{ background: color }}></span>
                ))}
              </div>
              <span className="phones__status">New</span>
              <h3 className="phones__list-title">{item.title}</h3>
              <p className="phones__list-text">{item.text}</p>
              <a className="phones__link" href="">
                Learn more <ChevronRight />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
