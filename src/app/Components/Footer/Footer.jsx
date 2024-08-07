"use client";
import Container from "../Container/Container";
import Link from "next/link";
import "./style.scss";
import { Links } from "@/app/utils/data";
import Telegram from "../../../../public/Icons/Telegram.svg";
import Facebook from "../../../../public/Icons/Facebook.svg";
import Instagram from "../../../../public/Icons/Instagram.svg";
import Twitter from "../../../../public/Icons/Twitter.svg";
import { useState } from "react";

export default function Footer() {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer__flex">
          <div className="footer__wrapper">
            <a className="footer__logo" href="/">
              Get it
            </a>
            <p className="footer__description">
              Собирайся, учись, развивайся – всё в одном месте!
            </p>
            <p className="footer__rules">
              Пользователи обязаны соблюдать правила пользования сайтом.
              Размещение объявлений бесплатно с учетом условий использования.
            </p>
          </div>

          <ul className="footer__ul">
            {Links.slice(0, 4).map((item, index) => (
              <li key={index} className="footer__list">
                <Link
                  className={`footer__link ${active === index ? "active" : ""}`}
                  href="#"
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="footer__ul">
            {Links.slice(4).map((item, index) => (
              <li key={index + 4} className="footer__list">
                <Link
                  className={`footer__link ${
                    active === index + 4 ? "active" : ""
                  }`}
                  href="#"
                  onClick={() => handleClick(index + 4)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="footer__right">
            <div className="footer__icons-box">
              <Link href={"#"} className="footer__social">
                <Telegram />
              </Link>
              <Link href={"#"} className="footer__social">
                <Facebook />
              </Link>
              <Link href={"#"} className="footer__social">
                <Instagram />
              </Link>
              <Link href={"#"} className="footer__social">
                <Twitter />
              </Link>
            </div>

            <div className="footer__right-wrapper">
              <p className="footer__right-text">Наш телефон:</p>
              <a className="footer__number" href="">
                +998 90 000-00-00
              </a>

              <p className="footer__right-text">Электронная почта:</p>
              <a className="footer__number" href="">
                info@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__bottom-text">Copyright @ 2024</span>
          <span className="footer__bottom-text">Terms of Use</span>
          <span className="footer__bottom-text">Privacy policy</span>
        </div>
      </Container>
    </footer>
  );
}
