import React from "react";
import Northern_Cardinal_Image from "../bird_images/Northern-Cardinal.jpg";
import Northern_Cardinal_Birdsong from "../bird_sounds/northern_cardinal.mp3";
import Northern_Cardinal_Fact from "../bird_facts/Northern_Cardinal.m4a";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";

export default function TutCard() {
  return (
    <dialog className="tutCard" id="tutCard">
      <section
        className="tutCard__top"
        style={{
          backgroundImage: `url(${Northern_Cardinal_Image})`,
        }}
      >
        <section className="tutModal__sounds">
          <img
            className="tutBirdsong-icon"
            id="tutBirdsong-icon"
            // onClick={playBirdsong}
            src={Birdsong}
          />
          <audio
            id="tutBirdsong"
            src={Northern_Cardinal_Birdsong}
            // onPlay={addBirdsongActive}
            // onPause={removeBirdsongActive}
            // onEnded={removeBirdsongActive}
          ></audio>
          <img
            className="tutFact-icon"
            id="tutFact-icon"
            src={Fact}
            // onClick={playFact}
          />
          <audio
            id="tutFact"
            src={Northern_Cardinal_Fact}
            // onPlay={addFactActive}
            // onPause={removeFactActive}
            // onEnded={removeFactActive}
          ></audio>
        </section>
      </section>
      <section className="tutModal__bottom">
        <h1 className="tutModal__bottom__birdName">Northern Cardinal</h1>
      </section>
    </dialog>
  );
}
