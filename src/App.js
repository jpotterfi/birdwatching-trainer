import "./App.css";
import "./modal.css";
import React from "react";
import deckList from "./deckList";
import Card from "./Components/Card";
import Header from "./Components/Header";

// deckList.birdCards

function App() {
  const [deck, setDeck] = React.useState(deckList.birdCards);

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
      />
    );
  });

  console.log(cardElements);

  return (
    <div className="App">
      <Header />
      {/* <dialog open className="modal"></dialog> */}
      <div className="container">{cardElements}</div>
    </div>
  );
}

export default App;
