import React from "react";
import Forwards from "../nonbird_images/forwards.svg";
import Backwards from "../nonbird_images/backwards.svg";

export default function Tutmodal(props) {
  const [page, setPage] = React.useState(1);

  return (
    <div className="tutModal" id="tutModal">
      <div className="tutModal__inner">
        <section className="tutModal__instructions">
          <div className="instruction">
            It looks like this is your first time Birdwatching!
          </div>
          <div className="instruction">
            Excellent! <br></br>
            The game is simple.
          </div>
          <div className="instruction">
            You will be shown four birds every round.
          </div>
          <div className="instruction">
            All you have to do is to select a bird that you haven’t previously
            selected!
          </div>
          <section className="tutModal__bottom">
            <div className="pageNumber">{`${page} / 2`}</div>
            <img id="forwards" src={Forwards} />
          </section>
        </section>
      </div>
    </div>
  );
}
