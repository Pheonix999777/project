"use client";
import Container from "@/app/Components/Container/Container";
import "./style.scss";
import { Buttons } from "@/app/utils/data";
import ChevronDown from "../../../../public/Icons/ChevronDown.svg";
import { useState } from "react";

export const Faqs = () => {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleClick = (index) => {
    setActiveBtn(activeBtn === index ? null : index);
  };

  return (
    <section className="faqs">
      <Container>
        <h2 className="faqs__title">Часто задаваемые вопросы</h2>
        {Buttons.map((item, index) => (
          <div className="faqs__tabs" key={index}>
            <button className="faqs__btn" onClick={() => handleClick(index)}>
              {item.text}
              <span
                className={`faqs__btn-icon ${
                  activeBtn === index ? "active" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </button>
            <div
              className={`faqs__wrapper ${activeBtn === index ? "active" : ""}`}
            >
              {activeBtn === index && <p>{item.text}</p>}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
