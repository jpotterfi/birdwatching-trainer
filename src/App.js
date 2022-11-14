import "./App.css";
import React from "react";
import deckList from "./deckList";
import Card from "./Components/Card";
import Header from "./Components/Header";

// deckList.birdCards

function App() {
  const [deck, setDeck] = React.useState(deckList.birdCards);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
