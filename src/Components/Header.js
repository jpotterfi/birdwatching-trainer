import React from "react";

export default function Header(props) {
  let rank = "";
  if (props.count < 5) {
    rank = "Hatchling";
  } else if (props.count >= 5 && props.count < 10) {
    rank = "Fledgling";
  } else if (props.count >= 10 && props.count < 15) {
    rank = "High Flyer";
  } else if (props.count >= 15 && props.count < 20) {
    rank = "Bird Watcher";
  } else if (props.count === 20) {
    rank = "Rara Avis";
  }
  return (
    <header className="header" id="header">
      <div className="header__messagearea" id="messagearea">
        {props.message}
      </div>
      <div className="header__rankarea">
        <div className="header__rankarea__currentrank">
          {`Current Score: ` + rank + ` (${props.count})`}
        </div>
        <div className="header__rankarea__highestrank">
          {`Highest Score: ` + rank + ` (${props.count})`}
        </div>
      </div>
    </header>
  );
}
