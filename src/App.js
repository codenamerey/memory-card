import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

import { useEffect, useState } from "react";
import 'normalize.css';
import './App.css';

function App() {
  const characters = ["Harry Potter", 'Albus Dumbledore', 'Bella Lestrange', 'Hermione Granger', 'Ron Weasley', 'Draco Malfoy', 'Voldemort']
  const charactersGIFUrl = ['https://media1.giphy.com/media/d6Ni9aqSatPfq/giphy.gif?cid=609307fexynwj84gts8k3go8v1wastgo6m7uywrnuyp985gw&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/A32EZQEZ2ATEk/giphy.gif?cid=609307fe6ju8sg0vfvsi72parki2jk54uku6w256un2h2gzh&rid=giphy.gif&ct=g',
'https://media.giphy.com/media/G0NqqnxBXFmWk/giphy.gif',
'https://media.giphy.com/media/Uw5esGjfVEDpC/giphy.gif',
'https://media.giphy.com/media/AUarrmo6rpyX6/giphy.gif',
'https://media.giphy.com/media/xgo9QvVgBy2go/giphy.gif',
'https://media.giphy.com/media/wLBS2GlPDALS0/giphy.gif'];
  const [randomCharacters, setRandomCharacters] = useState([]);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);

  useEffect(()=> {
    document.title = 'Memory Game';
    pickRandomCharacters(characters, 4);
  }, []);

  useEffect(()=> {
    
  }, [selectedCharacters]);

  useEffect(() => {
    if (score == (randomCharacters.length * 10) && score != 0) {
      setIsWinner(true);
    }

    if(score > highScore) {
      setHighScore(score);
    }
  }, [score]);

  function shuffleRandomCharacters() {
    let shallowRandomCharacters = randomCharacters.slice();
    let shuffledRandomCharacters = [];
    for(let i=randomCharacters.length; i>0; i--) {
      let randomIndex = Math.floor(Math.random() * shallowRandomCharacters.length);
      let randomCharacter = (shallowRandomCharacters.splice(randomIndex, 1))[0];
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

        {(!isGameOver && !isWinner) && <div className="scoreBoard">Score: {score} <br /> High score: {highScore} </div>}
        {(!isGameOver && !isWinner) && <div className="cardDeck">
        {
          randomCharacters.map(randomCharacter => {
            return <Card imgURL={charactersGIFUrl[characters.indexOf(randomCharacter)]} character={randomCharacter} id={characters.indexOf(randomCharacter)} handleCardClick={handleCardClick}></Card>
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
      {(isGameOver || isWinner) ? null : <Footer></Footer>}
    </div>
  );
}

export default App;
