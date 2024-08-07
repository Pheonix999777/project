"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import move from "lodash-move";
import Container from "@/app/Components/Container/Container";
import "./style.scss";

const CARD_COLORS = [
  {
    colors: "#266678",
    text: "Goal not by obstacles but by a clear path to a lesser goal.1",
  },
  {
    colors: "#36a18b",
    text: "Goal not by obstacles but by a clear path to a lesser goal.2",
  },
  {
    colors: "#cda35f",
    text: "Goal not by obstacles but by a clear path to a lesser goal.3",
  },
];
const CARD_OFFSET = 20;
const SCALE_FACTOR = 0.06;
const SPECIAL_COLOR = "#AB91D9";
const SECOND_COLOR = "#EAE3F7";
const THIRD_COLOR = "#F5F1FE";

const Service = () => {
  const [cards, setCards] = useState(CARD_COLORS);

  const moveToEnd = (from) => {
    setCards((prevCards) => move(prevCards, from, prevCards.length - 1));
  };

  return (
    <section className="service">
      <Container>
        <div className="service__wrapper">
          <ul className="service__style">
            {cards.map((card, index) => {
              const canDrag = index === 0;
              let backgroundColor;

              if (index === 0) {
                backgroundColor = SPECIAL_COLOR;
              } else if (index === 1) {
                backgroundColor = SECOND_COLOR;
              } else if (index === 2) {
                backgroundColor = THIRD_COLOR;
              } else {
                backgroundColor = card.colors;
              }

              return (
                <motion.li
                  key={card.colors}
                  className="service__card"
                  style={{
                    backgroundColor: backgroundColor,
                    cursor: canDrag ? "grab" : "auto",
                  }}
                  animate={{
                    top: index * -CARD_OFFSET,
                    scale: 1 - index * SCALE_FACTOR,
                    zIndex: CARD_COLORS.length - index,
                  }}
                  drag={canDrag ? "y" : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  onDragEnd={() => moveToEnd(index)}
                >
                  <div className="service__content">
                    <h2 className="service__title">{card.text}</h2>
                    <button className="service__btn">узнать больше</button>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Service;
