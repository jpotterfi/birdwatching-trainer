import React from "react";

export default function Header(props) {
  let rank = "";
  let message = "";

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

  let randInt = Math.floor(Math.random() * 6);

  if (props.count == 0) {
    message = "Welcome to Bird Trainer! Pick any bird.";
  } else if (props.count == 5) {
    message =
      "You found five unique birds in a row! Greatness awaits you, Fledgling!";
  } else if (props.count == 10) {
    message =
      "Wow! You've discovered 10 new birds! This High Flyer certainly isn't winging it.";
  } else if (props.count == 15) {
    message =
      "At 15 birds, this Bird Watcher has both a keen eye and a mind like a steel trap!";
  } else if (props.count == 20) {
    message =
      "You truly are a rare bird, Rare Avis. You identified all 20 birds. Take your quest further -- currently there are 10,824 species of birds in the world.";
  } else if (randInt == 0) {
    message = "You've discovered another bird! Im-peck-able!";
  } else if (randInt == 1) {
    message = "Kaw Kaw! (That's raven speak for 'You nailed it!')";
  } else if (randInt == 2) {
    message = "That was a new bird! Great job.";
  } else if (randInt == 3) {
    message = "Someone has an eagle eye!";
  } else if (randInt == 4) {
    message = "Well done! That bird was a beauty.";
  } else if (randInt == 5) {
    message = "Correct! Pick again.";
  }
  return (
    <header className="header" id="header">
      <div className="header__messagearea" id="messagearea">
        {message}
      </div>
      <div className="header__rankarea">
        <div className="header__rankarea__currentrank">
          {`Current Score: ` + rank + ` (${props.count})`}
        </div>
        <div className="header__rankarea__highestrank">
          {`Highest Score: ` + rank + ` (${props.highscore})`}
        </div>
      </div>
    </header>
  );
}
