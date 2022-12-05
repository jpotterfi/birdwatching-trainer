import React from "react";
import Forwards from "../nonbird_images/forwards.svg";
import Backwards from "../nonbird_images/backwards.svg";
import Accept from "../nonbird_images/accept.svg";
import Birdsong from "../nonbird_images/birdsong.svg";
import Fact from "../nonbird_images/fact.svg";
import TutCard from "../Components/TutCard";

export default function Tutmodal(props) {
  const [page, setPage] = React.useState(1);

  console.log(page);

  function pageForward() {
    setPage(2);
  }

  function pageBackward() {
    setPage(1);
  }

  return (
    <div className="tutModal" id="tutModal">
      <div className="tutModal__inner">
        {page === 1 ? (
          <>
            <section className="tutModal__instructions">
              <div className="instruction">
                <span className="bold">
                  It looks like this is your first time Birdwatching!
                </span>
              </div>
              <div className="instruction">
                You will be shown four birds every round.
              </div>
              <div className="instruction">
                <span className="bold">Earn a point</span> by selecting a bird
                that you haven’t selected before.
              </div>
              <div className="instruction">
                <span className="bold">Keep track of those birds!</span> The
                game ends when you select a previously selected bird.
              </div>
            </section>
            <section className="tutModal__bottom">
              <img src={Forwards} className="invisible" />
              <div id="pageNumber" className="pageNumber">{`${page} / 2`}</div>
              <img id="forwards" src={Forwards} onClick={pageForward} />
            </section>
          </>
        ) : (
          <>
            <section className="tutModal__instructions">
              <div className="instruction">
                When you select a bird, you’ll have a chance to hear the bird’s
                song and a fact about the bird.
              </div>
            </section>
            <section className="tutModal__middle">
              <TutCard />
              <div className="cardInstruction__group">
                <div className="cardInstruction">
                  <img src={Birdsong} />
                  <div className="cardInstruction__text">
                    Will play the bird’s song or call.
                  </div>
                </div>
                <div className="cardInstruction">
                  <img src={Fact} />
                  <div className="cardInstruction__text">
                    Will play a short fact about the bird.
                  </div>
                </div>
              </div>
            </section>
            <section className="tutModal__bottom">
              <img id="backwards" src={Backwards} onClick={pageBackward} />
              <div id="pageNumber" className="pageNumber">{`${page} / 2`}</div>
              <img id="accept" src={Accept} />
            </section>
          </>
        )}
      </div>
    </div>
  );
}
