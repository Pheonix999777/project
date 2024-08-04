"use client";
import "./style.scss";
import Search from "../../../../public/Icons/Search.svg";
import Heart from "../../../../public/Icons/Heart.svg";
import Globe from "../../../../public/Icons/Globe.svg";
import Link from "next/link";
import { Links } from "@/app/utils/data";
import { useState } from "react";

export default function Header() {
  const [active, setActive] = useState();

  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__flex">
          <a className="header__logo" href="/">
            Get it
          </a>
          <div className="header__search">
            <Search />
            <input
              className="header__inp"
              type="text"
              placeholder="Поиск продукта"
            />
          </div>

          <nav className="header__nav">
            <ul className="header__ul">
              {Links.map((item, index) => (
                <li key={index} className="header__list">
                  <Link
                    className={`header__link ${
                      active === index ? "active " : ""
                    }`}
                    href={"#"}
                    onClick={() => handleClick(index)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <button className="header__heart">
              <Heart />
            </button>
            <button className="header__heart">
              <Globe />
            </button>
          </div>

          <a className="header__call" href="">
            You want it come get it
          </a>
        </div>
      </div>
    </header>
  );
}
