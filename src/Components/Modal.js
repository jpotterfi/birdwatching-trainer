import Accept from "../nonbird_images/accept.svg";
import Deny from "../nonbird_images/deny.svg";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";

export default function Modal(props) {
  //   function hideModal() {
  //     const modal = document.getElementById("modal" + props.id);
  //     modal.close();
  //   }

  //   function playAudio() {
  //     const audio = document.getElementById("audio" + props.id);
  //     if (audio.duration > 0 && !audio.paused) {
  //       audio.pause();
  //     } else {
  //       audio.play();
  //     }
  //   }

  //   function playFact() {
  //     const fact = document.getElementById("fact" + props.id);
  //     fact.play();
  //   }
  return (
    <dialog className="modal" id={"modal" + props.id}>
      <section
        className="modal__top"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
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
      </section>
      <section className="modal__bottom">
        <h1 className="modal__bottom__birdName">{props.birdName}</h1>
        <div className="modal__bottom__buttons">
          <img id="accept" src={Accept}></img>
          <img id="deny" src={Deny} onClick={props.hideModal}></img>
        </div>
      </section>
    </dialog>
  );
}
