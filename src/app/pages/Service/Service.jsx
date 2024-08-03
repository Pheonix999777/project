"use client";
import "./style.scss";
import Container from "@/app/Components/Container/Container";

export const Service = () => {
  return (
    <section className="service">
      <Container>
        <div className="service__box">
          <div className="service__wrapper">
            <div className="service__content">
              <h2 className="service__title">
                Goal not by obstacles but by a clear path to a lesser goal.
              </h2>
              <button className="service__btn">Learn More</button>
            </div>
          </div>
          <div className="service__background"></div>
          <div className="service__inner-box"></div>
        </div>
      </Container>
    </section>
  );
};

export default Service;
