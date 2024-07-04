import { useState } from "react";
import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import fruitsImage from "./images/fruits.png";
import coffeImage from "./images/coffe.png";
import teaImage from "./images/tea.png";

function App() {
  const [fruitsVotes, setFruitsVotes] = useState(0);
  const [coffeVotes, setCoffeVotes] = useState(0);
  const [teaVotes, setTeaVotes] = useState(0);

  return (
    <div className="voting-app">
      <di className="container">
        <h1 className="app-heading">Voting App</h1>
        <div className="btns-container">
          <Button
            onClick={() => setFruitsVotes((prevVotes) => prevVotes + 1)}
            background="lightgreen"
          >
            Vote for fruits
          </Button>
          <Button
            onClick={() => setTeaVotes((prevVotes) => prevVotes + 1)}
            background="#e1dd72"
          >
            Vote for tea
          </Button>
          <Button
            onClick={() => setCoffeVotes((prevVotes) => prevVotes + 1)}
            background="#ffd79d"
          >
            Vote for coffe
          </Button>
        </div>
        <div className="cards-container">
          <Card
            src={fruitsImage}
            background="lightgreen"
            votesCount={fruitsVotes}
          />
          <Card src={teaImage} background="#e1dd72" votesCount={teaVotes} />
          <Card src={coffeImage} background="#ffd79d" votesCount={coffeVotes} />
        </div>
      </di>
    </div>
  );
}

export default App;
