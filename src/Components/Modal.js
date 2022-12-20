import Accept from "../nonbird_images/accept.svg";
import Deny from "../nonbird_images/deny.svg";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";
import Refresh from "../nonbird_images/refresh.svg";
import React from "react";
import Rare_Avis from "../bird_images/boston-public-library-rare-avis.jpg";

export default function Modal(props) {
  const [gameOver, setGameOver] = React.useState(false);
  const [gameWin, setGameWin] = React.useState(false);

  let hasVowelStart = false;
  let firstLetter = "";

  firstLetter = props.id.charAt(0);

  if (
    firstLetter === "a" ||
    firstLetter === "e" ||
    firstLetter === "i" ||
    firstLetter === "o" ||
    firstLetter === "u"
  ) {
    hasVowelStart = true;
  }

  function evaluate() {
    console.log("evaluate accessed");
    console.log(props.prevPicked);
    if (props.prevPicked === true) {
      setGameOver(true);
      let modal = document.getElementById("modal" + props.id);
      console.log(modal);
      modal.classList.add("gameOver");
    }
    if (props.count === 19 && props.prevPicked === false) {
      setGameWin(true);
    } else if (props.prevPicked === false) {
      console.log("prevPicked is false");
      props.setPrevPicked(props.id);
    }
  }

  function exitModal() {
    const birdsong = document.getElementById("birdsong" + props.id);
    const fact = document.getElementById("fact" + props.id);
    birdsong.pause();
    fact.pause();
    props.hideModal();
  }

  function resetGame() {
    setGameOver(false);
    setGameWin(false);
    props.resetCount();
    props.resetDeck();
    props.hideModal();
    let modal = document.getElementById("modal" + props.id);
    modal.classList.remove("gameOver");
  }

  return (
    <dialog className="modal" id={"modal" + props.id}>
      <section
        className="modal__top"
        style={{
          backgroundImage:
            gameWin === false ? `url(${props.img})` : `url(${Rare_Avis})`,
        }}
      >
        {gameWin == false && (
          <section className="modal__sounds">
            <img
              className="birdsong-icon"
              id={"birdsong-icon" + props.id}
              onClick={props.playBirdsong}
              src={Birdsong}
            />
            <audio
              id={"birdsong" + props.id}
              src={props.birdsong}
              onPlay={props.addBirdsongActive}
              onPause={props.removeBirdsongActive}
              onEnded={props.removeBirdsongActive}
            ></audio>
            <img
              className="fact-icon"
              id={"fact-icon" + props.id}
              src={Fact}
              onClick={props.playFact}
            />
            <audio
              id={"fact" + props.id}
              src={props.fact}
              onPlay={props.addFactActive}
              onPause={props.removeFactActive}
              onEnded={props.removeFactActive}
            ></audio>
          </section>
        )}
      </section>
      <section className="modal__bottom">
        {gameOver === true ? (
          <h1 className="modal__bottom__gameOverMessage">
            You've already spotted {hasVowelStart ? "an" : "a"} {props.name}!
          </h1>
        ) : gameWin === true ? (
          <h1 className="modal__bottom__gameWinMessage">
            You win! You found all twenty birds and have earned the title of
            <span className="bold"> rare avis</span> - rare bird!
          </h1>
        ) : (
          <h1 className="modal__bottom__birdName">{props.name}</h1>
        )}
        {gameOver === true ? (
          <div className="modal__bottom__refresharea">
            <img id="refresh" src={Refresh} onClick={resetGame}></img>
            <div id="refresh-message">Try Again?</div>
          </div>
        ) : gameWin === true ? (
          <div className="modal__bottom__refresharea">
            <img id="refresh" src={Refresh} onClick={resetGame}></img>
            <div id="refresh-message">Play again?</div>
          </div>
        ) : (
          <div className="modal__bottom__buttons">
            <img id="accept" src={Accept} onClick={evaluate}></img>
            <img id="deny" src={Deny} onClick={exitModal}></img>
          </div>
        )}
      </section>
    </dialog>
  );
}
