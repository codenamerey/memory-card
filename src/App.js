import { useEffect, useState } from "react";

function App() {
  const [randomCharacters, setRandomCharacters] = useState([]);

  useEffect(()=> {
    document.title = 'Memory Game';
  }, []);

  useEffect(() => {

  }, [randomCharacters])

  return (
    <div className="App">
    </div>
  );
}

export default App;
