import Container from "@/app/Components/Container/Container";
import "./style.scss";
import { BlogData } from "@/app/utils/data";
import Image from "next/image";

export const Blog = () => {
  return (
    <section className="blog">
      <Container>
        <div className="blog__box">
          <h2 className="blog__title">Новости и блог</h2>
          <p className="blog__box-text">
            Все оригинале толька у нас и толька для вас
          </p>
        </div>

        <ul className="blog__ul">
          {BlogData.map((item, index) => (
            <li className="blog__list" key={index}>
              <Image src={item.img} alt="" width={320} height={251} />
              <p className="blog__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
