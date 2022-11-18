import Accept from "../nonbird_images/accept.svg";
import Deny from "../nonbird_images/deny.svg";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";

export default function Modal(props) {
  function hideModal() {
    const modal = document.getElementById("modal" + props.id);
    modal.close();
  }

  function playAudio() {
    const audio = document.getElementById("audio" + props.id);
    audio.play();
  }
  return (
    <dialog className="modal" id={"modal" + props.id}>
      <section
        className="modal__top"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
        <section className="modal__sounds">
          <img id="birdsong" onClick={playAudio} src={Birdsong} />
          <audio id={"audio" + props.id} src={props.birdsong}></audio>
          <img id="fact" src={Fact} />
        </section>
      </section>
      <section className="modal__bottom">
        <h1 className="modal__bottom__birdName">{props.birdName}</h1>
        <div className="modal__bottom__buttons">
          <img id="accept" src={Accept}></img>
          <img id="deny" src={Deny} onClick={hideModal}></img>
        </div>
      </section>
    </dialog>
  );
}
