import Accept from "../nonbird_images/accept.svg";
import Deny from "../nonbird_images/deny.svg";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";
import Refresh from "../nonbird_images/refresh.svg";

export default function Modal(props) {
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
        {props.gameOver !== true ? (
          <h1 className="modal__bottom__birdName">{props.name}</h1>
        ) : (
          <h1 className="modal__bottom__gameOverMessage">
            You've already spotted a {props.name}!
          </h1>
        )}
        {props.gameOver !== true ? (
          <div className="modal__bottom__buttons">
            <img id="accept" src={Accept} onClick={props.evaluate}></img>

            <img id="deny" src={Deny} onClick={props.hideModal}></img>
          </div>
        ) : (
          <div className="modal__bottom__refresharea">
            <img id="refresh" src={Refresh}></img>
            <div id="refresh-message">Try Again?</div>
          </div>
        )}
      </section>
    </dialog>
  );
}
