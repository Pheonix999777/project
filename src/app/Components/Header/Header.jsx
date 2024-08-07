"use client";
import "./style.scss";
import Search from "../../../../public/Icons/Search.svg";
import Heart from "../../../../public/Icons/Heart.svg";
import Globe from "../../../../public/Icons/Globe.svg";
import Link from "next/link";
import { Links } from "@/app/utils/data";
import { useState } from "react";
import Menu from "../../../../public/Icons/Menu.svg";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [active, setActive] = useState();
  const [show, setShow] = useState(false);

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__flex">
          <button className="header__menu" onClick={() => setShow(true)}>
            <Menu />
          </button>
          <a className="header__logo" href="/">
            Get it
          </a>
          <form className="header__search">
            <span>
              <Search />
            </span>
            <input
              className="header__inp"
              type="text"
              placeholder="Поиск продукта"
            />
          </form>

          <nav className={show ? "header__nav active" : "header__nav"}>
            <button className="header__close" onClick={() => setShow(false)}>
              <IoMdClose />
            </button>
            <ul className="header__ul">
              {Links.map((item, index) => (
                <li
                  key={index}
                  className="header__list"
                  onClick={() => setShow(false)}
                >
                  <Link
                    className={`header__link ${
                      active === index ? "active" : ""
                    }`}
                    href={"#"}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <a className="header__mobile-call" href="">
              You want it come get it
            </a>
          </nav>
          {show && (
            <div className="headr__dark" onClick={() => setShow(false)}></div>
          )}

          <div className="header__actions">
            <Link href={"#"} className="header__heart">
              <Heart />
            </Link>
            <button className="header__heart">
              <Globe />
            </button>
          </div>

          <a className="header__call" href="">
            You want it come get it
          </a>
        </div>

        <form className="header__form">
          <span>
            <Search />
          </span>
          <input
            className="header__input"
            type="text"
            placeholder="Поиск продукта"
          />
        </form>
      </div>
    </header>
  );
}
