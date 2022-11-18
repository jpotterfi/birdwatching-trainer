import React from "react";
import Northern_Cardinal from "../bird_images/Northern-Cardinal.jpg";
import Modal from "./Modal";

export default function Card(props) {
  function openModal() {
    const modal = document.getElementById("modal" + props.id);
    modal.showModal();
    playAudio();
  }

  function playAudio() {
    const audio = document.getElementById("audio" + props.id);
    audio.play();
  }
  //   <Card
  //   name={deck[num].name}
  //   sciName={deck[num].sciName}
  //   key={deck[num].id}
  //   img={deck[num].img}
  //   birdsong={deck[num].audio}
  //   prevPicked={deck[num].prevPicked}
  // />

  return (
    <div>
      <Modal
        name={props.name}
        id={props.id}
        img={props.img}
        birdsong={props.birdsong}
      />
      <div className="card" onClick={openModal}>
        <img className="card__image" src={props.img} />
        <section className="card__info">
          <div className="birdName">{props.name}</div>
        </section>
      </div>
    </div>
  );
}
