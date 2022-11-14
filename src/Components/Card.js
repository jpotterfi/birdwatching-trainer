import React from "react";
import Northern_Cardinal from "../bird_images/Northern-Cardinal.jpg";
import Modal from "./Modal";

export default function Card() {
  function openModal() {
    const modal = document.getElementById("modal" + "cardinal");
    modal.show();
  }
  return (
    <div className="card" onClick={openModal}>
      <Modal birdName={"cardinal"} img={Northern_Cardinal} />
      <img className="card__image" src={Northern_Cardinal} />
      <section className="card__info">
        <div className="birdName">Northern Cardinal</div>
      </section>
    </div>
  );
}
