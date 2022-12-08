import Header from "./components/Header";
import Card from "./components/Card";
import uniqid from 'uniqid';

import { useEffect, useState } from "react";
import 'normalize.css';
import './App.css';

function App() {
  const characters = ["Harry Potter", 'Albus Dumbledore', 'Bella Lestrange', 'Hermione Granger', 'Ron Weasley', 'Draco Malfoy', 'Voldemort']
  const [randomCharacters, setRandomCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(()=> {
    document.title = 'Memory Game';
    pickRandomCharacters(characters, 4);
  }, []);

  useEffect(()=> {
    
  }, [selectedCharacters]);

  useEffect(() => {
    if (score == (randomCharacters.length * 10)) {
      setIsWinner(true);
    }
  }, [score]);

  function shuffleRandomCharacters() {
    let shallowRandomCharacters = randomCharacters.slice();
    let shuffledRandomCharacters = [];
    for(let i=randomCharacters.length; i>0; i--) {
      let randomIndex = Math.floor(Math.random() * shallowRandomCharacters.length);
      let randomCharacter = shallowRandomCharacters.splice(randomIndex, 1);
      shuffledRandomCharacters.push(randomCharacter);
    }
    setRandomCharacters(shuffledRandomCharacters);
  }


  function pickRandomCharacters(characters, numberOfCharacters) {
    let shallowCharacters = characters.slice();
    let functionRandomCharacters = [];
    for(let i=numberOfCharacters; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * shallowCharacters.length);
      let randomCharacter = shallowCharacters.splice(randomIndex, 1);
      functionRandomCharacters.push(randomCharacter[0]);
    }
    setRandomCharacters(functionRandomCharacters);
  }

  function handleCardClick(character) {
    if(selectedCharacters.some(selectedCharacter => {
      return selectedCharacter == character;
    })) {
      setIsGameOver(true);
      return;
    }
    setSelectedCharacters(oldArray => [...oldArray, character]);
    setScore(oldScore => oldScore + 10);
    shuffleRandomCharacters();
  }

  function restartGame() {
    setRandomCharacters([]);
    setSelectedCharacters([]);
    setIsGameOver(false);
    setScore(0);
    setIsWinner(false);
    pickRandomCharacters(characters, 7);
  }

  return (
    <div className="App">
      <Header></Header>

        {(!isGameOver && !isWinner) && <div className="scoreBoard">Score: {score}</div>}
        {(!isGameOver && !isWinner) && <div className="cardDeck">
        {
          randomCharacters.map(randomCharacter => {
            return <Card character={randomCharacter} id={uniqid()} handleCardClick={handleCardClick}></Card>
          })
        }
      
      </div>}

      {isGameOver && <div className="losingScreen">
        <h1>You Lost!</h1>
        <button onClick={restartGame}>Play Again</button>
      </div>  }

      {isWinner && <div className="winningScreen">
        <h1>You Win!</h1>
        <button onClick={restartGame}>Play Again</button>
      </div>  }
    </div>
  );
}

export default App;
