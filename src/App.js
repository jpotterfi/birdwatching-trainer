import "./App.css";
import "./modal.css";
import "./tutmodal.css";
import React from "react";
import deckList from "./deckList";
import Card from "./Components/Card";
import Header from "./Components/Header";
import TutModal from "./Components/TutModal";

// deckList.birdCards

function App() {
  const [deck, setDeck] = React.useState(deckList.birdCards);

  const [highscore, setHighscore] = React.useState(
    localStorage.getItem("highscore") || 0
  );

  const [isNewPlayer, setIsNewPlayer] = React.useState(
    localStorage.getItem("isNewPlayer") || true
  );
  const [count, setCount] = React.useState(0);

  React.useEffect(
    function () {
      if (count > highscore) {
        localStorage.setItem("highscore", count);
        setHighscore(count);
      }
    },
    [count]
  );

  function resetCount() {
    setCount(0);
  }

  function resetDeck() {
    setDeck(deckList.birdCards);
  }

  // const [gameOver, setGameOver] = React.useState(false);

  // function evaluate(prevPicked, id) {
  //   console.log(prevPicked);
  //   if (prevPicked == false) {
  //     console.log("this was a new bird");
  //     setPrevPicked(id);
  //   }
  //   if (prevPicked === true) {
  //     console.log("this was an old bird");
  //     console.log(id);
  //     setGameOver(true);
  //   }
  //   if (gameOver === true) {
  //     console.log("reset game");
  //   }
  // }

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
  }

  function generateQuartet() {
    let nums = [];

    for (let i = 0; i < 20; i++) {
      nums.push(i);
    } //generates an array of 20 values: 0, 1, 2 ... 19

    let randArr = [];
    for (let i = 0; i < 4; i++) {
      let rand = Math.floor(Math.random() * nums.length);
      randArr.push(nums[rand]);
      nums.splice(rand, 1);
    }
    return randArr;
  }

  function generateLegalQuartet() {
    let quartet = generateQuartet();
    let legalCards = [];

    for (let i = 0; i < deck.length; i++) {
      if (deck[i].prevPicked === false) {
        legalCards.push(i);
      }
    }
    if (
      deck[quartet[0]].prevPicked === true &&
      deck[quartet[1]].prevPicked === true &&
      deck[quartet[2]].prevPicked === true &&
      deck[quartet[3]].prevPicked === true &&
      legalCards.length > 0
    ) {
      let randLegalCard = Math.floor(Math.random() * legalCards.length);
      let randInt = Math.floor(Math.random() * 4);
      quartet[randInt] = legalCards[randLegalCard];
    }
    return quartet;
  }

  // {
  //   id: "northern_cardinal",
  //   name: "Northern Cardinal",
  //   sciName: "Cardinalis cardinalis",
  //   img: Northern_Cardinal,
  //   audio: Audio_Northern_Cardinal,
  //   prevPicked: false,
  // },

  const cardElements = generateLegalQuartet().map(function (num) {
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
        resetCount={resetCount}
        resetDeck={resetDeck}
        // evaluate={() => evaluate(deck[num].prevPicked, deck[num].id)}
      />
    );
  });

  console.log(cardElements);

  return (
    <div className="App">
      <Header count={count} highscore={highscore} />
      <TutModal />
      {/* <dialog open className="modal"></dialog> */}
      <div className="container">{cardElements}</div>
    </div>
  );
}

export default App;
