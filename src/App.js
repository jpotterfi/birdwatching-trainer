import "./App.css";
import "./modal.css";
import React from "react";
import deckList from "./deckList";
import Card from "./Components/Card";
import Header from "./Components/Header";

// deckList.birdCards

function App() {
  const [deck, setDeck] = React.useState(deckList.birdCards);

  const [count, setCount] = React.useState(0);

  const [message, setMessage] = React.useState(
    "Welcome to Bird Trainer! Pick any bird."
  );

  function setPrevPicked(id) {
    const modal = document.getElementById("modal" + id);
    modal.close();
    const header = document.getElementById("header");
    const messagearea = document.getElementById("messagearea");
    header.classList.remove("correct");
    messagearea.classList.remove("correctMessage");
    void header.offsetWidth; //javascript magic that resets header animation so that correctFeedback() can trigger animation
    void messagearea.offsetWidth;

    console.log("setPrevPicked accessed");
    setCount(function (prevCount) {
      return prevCount + 1;
    });
    setDeck((prevDeck) =>
      prevDeck.map(function (card) {
        return card.id === id
          ? { ...card, prevPicked: !card.prevPicked }
          : card;
      })
    );

    console.log(count);
    correctFeedback();
  }

  function correctFeedback() {
    const header = document.getElementById("header");
    header.classList.add("correct"); //begins header animation
    const messagearea = document.getElementById("messagearea");
    messagearea.classList.add("correctMessage");

    let randInt = Math.floor(Math.random() * 6);

    if (count + 1 == 5) {
      setMessage(
        "You found five unique birds in a row! Greatness awaits you, Fledgling!"
      );
    } else if (count + 1 == 10) {
      setMessage(
        "Wow! You've discovered 10 new birds! This High Flyer certainly isn't winging it."
      );
    } else if (count + 1 == 15) {
      setMessage(
        "At 15 birds, this Bird Watcher has both a keen eye and a mind like a steel trap!"
      );
    } else if (count + 1 == 20) {
      setMessage(
        "You truly are a rare bird, Rare Avis. You identified all 20 birds. Take your quest further -- currently there are 10,824 species of birds in the world."
      );
    } else if (randInt == 0) {
      setMessage("You've discovered another bird! Im-peck-able!");
    } else if (randInt == 1) {
      setMessage("Kaw Kaw! (That's raven speak for 'You nailed it!')");
    } else if (randInt == 2) {
      setMessage("That was a new bird! Great job.");
    } else if (randInt == 3) {
      setMessage("Someone has an eagle eye!");
    } else if (randInt == 4) {
      setMessage("Well done! That bird was a beauty.");
    } else if (randInt == 5) {
      setMessage("Correct! Pick again.");
    }
  }

  function generateQuartet() {
    let nums = [];
    for (let i = 0; i < 20; i++) {
      nums.push(i);
    }

    let randArr = [];
    for (let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * nums.length);
      randArr.push(nums[rand]);
      nums.splice(rand, 1);
    }
    return randArr;
  }

  // {
  //   id: "northern_cardinal",
  //   name: "Northern Cardinal",
  //   sciName: "Cardinalis cardinalis",
  //   img: Northern_Cardinal,
  //   audio: Audio_Northern_Cardinal,
  //   prevPicked: false,
  // },

  const cardElements = generateQuartet().map(function (num) {
    return (
      <Card
        name={deck[num].name}
        sciName={deck[num].sciName}
        id={deck[num].id}
        img={deck[num].img}
        birdsong={deck[num].audio}
        prevPicked={deck[num].prevPicked}
        fact={deck[num].fact}
        setPrevPicked={() => setPrevPicked(deck[num].id)}
      />
    );
  });

  console.log(cardElements);

  return (
    <div className="App">
      <Header count={count} message={message} />
      {/* <dialog open className="modal"></dialog> */}
      <div className="container">{cardElements}</div>
    </div>
  );
}

export default App;
