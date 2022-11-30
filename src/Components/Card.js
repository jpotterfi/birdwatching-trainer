import React from "react";
import Northern_Cardinal from "../bird_images/Northern-Cardinal.jpg";
import Modal from "./Modal";

export default function Card(props) {
  function openModal() {
    const modal = document.getElementById("modal" + props.id);
    modal.showModal();
    playBirdsong();
  }

  function hideModal() {
    const modal = document.getElementById("modal" + props.id);
    modal.close();
  }

  function playBirdsong() {
    const birdsong = document.getElementById("birdsong" + props.id);
    // const birdsongIcon = document.getElementById("birdsong-icon" + props.id);

    // birdsongIcon.className = "active";

    if (birdsong.duration > 0 && !birdsong.paused) {
      birdsong.pause();
      // birdsongIcon.classList.remove("active");
    } else {
      birdsong.play();
    }
  }
  function playFact() {
    const fact = document.getElementById("fact" + props.id);
    // const factIcon = document.getElementById("fact-icon" + props.id);

    if (fact.duration > 0 && !fact.paused) {
      fact.pause();
      // fact.classList.remove("active");
    } else {
      fact.play();
    }
  }

  function addFactActive() {
    const factIcon = document.getElementById("fact-icon" + props.id);
    factIcon.classList.add("active");
  }

  function removeFactActive() {
    const factIcon = document.getElementById("fact-icon" + props.id);
    factIcon.classList.remove("active");
  }

  function addBirdsongActive() {
    const birdsongIcon = document.getElementById("birdsong-icon" + props.id);
    birdsongIcon.classList.add("active");
  }

  function removeBirdsongActive() {
    const birdsongIcon = document.getElementById("birdsong-icon" + props.id);
    birdsongIcon.classList.remove("active");
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
        fact={props.fact}
        prevPicked={props.prevPicked}
        playBirdsong={playBirdsong}
        playFact={playFact}
        hideModal={hideModal}
        addBirdsongActive={addBirdsongActive}
        removeBirdsongActive={removeBirdsongActive}
        addFactActive={addFactActive}
        removeFactActive={removeFactActive}
        setPrevPicked={props.setPrevPicked}
        resetCount={props.resetCount}
        resetDeck={props.resetDeck}
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
