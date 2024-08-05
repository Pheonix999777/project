"use client";
import { useEffect, useRef } from "react";
import "./style.scss";
import Container from "@/app/Components/Container/Container";

const items = [
  { title: "Goal not by obstacles but by a clear path to ." },
  { title: "Goal not by obstacles but by a clear path." },
  { title: "Goal not by obstacles but by a clear path to a lesser goal." },
];

const Service = () => {
  const cardStackRef = useRef(null);

  useEffect(() => {
    const cardStack = cardStackRef.current;
    const cards = Array.from(cardStack.querySelectorAll(".card"));
    const cardList = cardStack.querySelector(".card-list");
    let isDragging = false;
    let startX;

    const startDragging = (e) => {
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;

      document.addEventListener("mousemove", onDrag);
      document.addEventListener("touchmove", onDrag);

      document.addEventListener("mouseup", stopDragging);
      document.addEventListener("touchend", stopDragging);
    };

    const onDrag = (e) => {
      if (!isDragging) return;
      const x = e.pageX || e.touches[0].pageX;
      const walk = x - startX;

      if (walk < -170) {
        // swipe left
        changeCard("left");
        isDragging = false;
        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("touchmove", onDrag);
      } else if (walk > 170) {
        // swipe right
        changeCard("right");
        isDragging = false;
        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("touchmove", onDrag);
      }
    };

    const stopDragging = () => {
      isDragging = false;
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("touchmove", onDrag);
    };

    const changeCard = (direction) => {
      if (direction === "left") {
        const lastCard = cards.pop();
        lastCard.classList.remove("transformThis", "activeNow");
        cardList.prepend(lastCard);
        cards.unshift(lastCard);
        updateCardColors();
      } else if (direction === "right") {
        const lastCard = cards.pop();
        lastCard.classList.remove("transformThis", "activeNow");
        cardList.prepend(lastCard);
        cards.unshift(lastCard);
        updateCardColors();
      }
    };

    const updateCardColors = () => {
      cards.forEach((card, index) => {
        card.style.backgroundColor =
          index === cards.length - 1 ? "#AB91D9" : "";
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mousedown", startDragging);
      card.addEventListener("touchstart", startDragging);
    });

    updateCardColors();

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousedown", startDragging);
        card.removeEventListener("touchstart", startDragging);
      });
    };
  }, []);

  return (
    <section className="service">
      <Container>
        <div className="card-stack" ref={cardStackRef}>
          <ul className="card-list">
            {items.map((item, index) => (
              <li key={index} className="card">
                <div className="service__content">
                  <h2 className="service__title">{item.title}</h2>
                  <button className="service__btn">узнать больше</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default Service;
