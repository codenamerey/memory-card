import Header from "./components/Header";
import Card from "./components/Card";

import { useEffect, useState } from "react";

function App() {
  const characters = ["Harry Potter", 'Albus Dumbledore', 'Bella Lestrange', 'Hermione Granger', 'Ron Weasley', 'Draco Malfoy', 'Voldemort']
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(()=> {
    document.title = 'Memory Game';
    pickRandomCharacters(characters, 4);
    console.log(randomCharacters);
  }, []);

  useEffect(() => {

  }, [randomCharacters])


  function pickRandomCharacters(characters, numberOfCharacters) {
    let shallowCharacters = characters.slice();
    let functionRandomCharacters = [];
    for(let i=numberOfCharacters; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * shallowCharacters.length);
      let randomCharacter = shallowCharacters.splice(randomIndex, 1);
      console.log(randomCharacter);
      functionRandomCharacters.push(randomCharacter[0]);
    }
    console.log(functionRandomCharacters);
    setRandomCharacters(functionRandomCharacters);
  }

  return (
    <div className="App">
      <Header></Header>
      {
        randomCharacters.map(randomCharacter => {
          return <Card character={randomCharacter}></Card>
        })
      }
    </div>
  );
}

export default App;
